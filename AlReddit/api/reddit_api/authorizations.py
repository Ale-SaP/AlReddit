import random
from .reddit_object import *
from ..models import State

#Checks if the state already existed.
def checkForState(stateSent):
    try:
        get_state = State.objects.get(state=stateSent)
        return True
    except State.DoesNotExist:
        return False

#Generates a random state and logs it, returns the state and a url to authorize AlReddit to access your account.
def firstCall():
    reddit = initPraw()

    randomState = str(random.randint(0, 100000))

    #While state is repeated
    while checkForState(randomState):
        randomState = str(random.randint(0, 100000))
    createstate = State(state=randomState)
    createstate.save()

    url = reddit.auth.url(scopes=["account"], state=randomState, duration="permanent")
    print(url)
    return({"url" : url, "sucess":True})

#Receives the access token or "code", returns the refresh token.
def authorizeWithCode(codeGiven):
    try:
        reddit = initPraw()
        auth = reddit.auth.authorize(code=codeGiven)
        return ({"re-token":auth, "success": True})

    except Exception as Ex:
        return ({"success": False, "error":f"{Ex}"})