import praw

import environ
env = environ.Env()
# reading .env file
environ.Env.read_env()

import random

from .models import State

from .statesLog import logState, searchForState

def checkForState(stateSent):
    try:
        get_state = State.objects.get(state=stateSent)
        return True
    except State.DoesNotExist:
        return False

def initPraw():
    reddit = praw.Reddit(
        client_id = env("CLIENT_ID"),
        client_secret = env("SECRET_KEY"),
        redirect_uri = env("REDIRECT_URI"),
        user_agent = env("USER_AGENT"),
    )
    return reddit

def refreshTokenPraw(re_token):
    reddit = praw.Reddit(
        client_id = env("CLIENT_ID"),
        client_secret = env("SECRET_KEY"),
        redirect_uri = env("REDIRECT_URI"),
        user_agent = env("USER_AGENT"),
        refresh_token=re_token,
    )
    return reddit

def firstCall():
    reddit = initPraw()

    randomState = str(random.randint(0, 100000))
    
    while checkForState(randomState):
        randomState = str(random.randint(0, 100000))
    
    createstate = State(state=randomState)
    createstate.save()
    url = reddit.auth.url(scopes=["account"], state=randomState, duration="permanent")

    return({"url":url, "state":randomState})

def authorizeWithCode(codeGiven):
    try:
        reddit = initPraw()
        auth = reddit.auth.authorize(code=codeGiven)
        userFrontpage = frontPage(auth)
        return ({"re-token":auth, "success": True, "user-frontpage": userFrontpage})

    except Exception as Ex:
        return ({"success": False, "error":f"{Ex}"})

def frontPage(token):
    reddit = initPraw()
    listOfPosts = []
    for post in reddit.front.hot(limit=10):
        listOfPosts.append({"title" : post.title, "body" : post.selftext})
    return listOfPosts