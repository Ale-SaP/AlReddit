import praw

import environ
env = environ.Env()
# reading .env file
environ.Env.read_env()

#Returns the reddit object
def initPraw():
    reddit = praw.Reddit(
        client_id = env("CLIENT_ID"),
        client_secret = env("SECRET_KEY"),
        redirect_uri = env("REDIRECT_URI"),
        user_agent = env("USER_AGENT"),
    )
    return reddit

#Returns the reddit object logged with the token
def authorizedPraw(re_token):
    reddit = praw.Reddit(
        client_id = env("CLIENT_ID"),
        client_secret = env("SECRET_KEY"),
        user_agent = env("USER_AGENT"),
        refresh_token=re_token,
    )
    return reddit