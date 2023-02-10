import praw

import environ
env = environ.Env()
# reading .env file
environ.Env.read_env()

import random

from .models import State

from .statesLog import logState, searchForState

def initPraw():
    reddit = praw.Reddit(
        client_id = env("CLIENT_ID"),
        client_secret = env("SECRET_KEY"),
        redirect_uri = env("REDIRECT_URI"),
        user_agent = env("USER_AGENT"),
    )
    return reddit

def firstCall():
    reddit = praw.Reddit(
        client_id = env("CLIENT_ID"),
        client_secret = env("SECRET_KEY"),
        redirect_uri = env("REDIRECT_URI"),
        user_agent = env("USER_AGENT"),
    )

    state = str(random.randint(0, 65000))
    while (Status.objects.get(status=state) == Status.DoesNotExist):
        state = str(random.randint(0, 65000))    

    url = reddit.auth.url(scopes=["account"], state=state, duration="permanent")
    return({"url":url, "state":state})

def authorizeWithCode(code):
    reddit = initPraw()
    authorization = reddit.auth.authorize(code)
    return(authorization)