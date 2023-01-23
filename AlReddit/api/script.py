import praw

import environ
env = environ.Env()
# reading .env file
environ.Env.read_env()

import random
def firstCall():
    reddit = praw.Reddit(
        client_id = env("CLIENT_ID"),
        client_secret = env("SECRET_KEY"),
        redirect_uri = env("REDIRECT_URI"),
        user_agent = env("USER_AGENT"),
    )

    state = str(random.randint(0, 65000))
    return(reddit.auth.url(scopes=["account"], state=state, duration="permanent"))
