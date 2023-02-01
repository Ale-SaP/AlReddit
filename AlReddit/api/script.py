import praw

import environ
env = environ.Env()
# reading .env file
environ.Env.read_env()

import random

def initPraw():
    reddit = praw.Reddit(
        client_id = env("CLIENT_ID"),
        client_secret = env("SECRET_KEY"),
        redirect_uri = env("REDIRECT_URI"),
        user_agent = env("USER_AGENT"),
    )
    return reddit

def firstCall():
    reddit = initPraw()
    state = str(random.randint(0, 65000))
    #Here it should register the state into some file
    return(reddit.auth.url(scopes=["account"], state=state, duration="permanent"), state)

def authorizeWithCode(code):
    reddit = initPraw()
    authorization = reddit.auth.authorize(code)
    return(authorization)