from django.shortcuts import render

from datetime import datetime, timedelta

from rest_framework import status
from rest_framework import response
from rest_framework.decorators import api_view

from .reddit_api.authorizations import *
from .reddit_api.frontpage import *
from .reddit_api.reddit_object import *

from .models import State
from .serializers import StateSerializer

# Create your views here.
@api_view(['GET'])
def test(request):
    return response.Response({"Test": "Passed", "True" : True, "False" : False})

@api_view(["GET"])
def getLink(request):
    content = firstCall()
    Res = response.Response(content)
    Res.set_cookie(key="logged_in", value=True)
    return Res

@api_view(["POST"])
def receiveCredentials(request):
    data = request.data
    try:
        #State gets checked and deleted
        get_state = State.objects.get(state=data["state"])
        get_state.delete()

        #Access token is passed
        auth = authorizeWithCode(data["code"])

        #Date is defined; status is OK and refresh_token is set as a HTTP Cookie; logged_in is a js accessible cookie.
        last_usable_date = datetime.utcnow() + timedelta(days=10)
        Res = response.Response(status=status.HTTP_202_ACCEPTED)
        Res.set_cookie(key="reddit_token", value=auth["re-token"] , expires = last_usable_date, secure=False, httponly=True, samesite="None" )
        Res.set_cookie(key="logged_in", value=True, expires = last_usable_date, httponly=False, secure=False, samesite="None", domain="localhost")
        return Res

    except State.DoesNotExist:
        Res = response.Response({"reason":"status not found"}, status=status.HTTP_404_NOT_FOUND)
        Res.set_cookie(key="logged_in", value=False )
        return Res

#If there is a reddit token, rensponse is 202; if there is not response is 200
@api_view(["GET"])
def checkIfLoggedIn(request):
    try:
        print(request.COOKIES["reddit_token"])
        if (request.COOKIES["reddit_token"] != None):
            return response.Response({"pass": True}, status=status.HTTP_202_ACCEPTED)
        else: 
            return response.Response({"pass": False}, status=status.HTTP_200_OK)
    except:
        return response.Response({"pass": False}, status=status.HTTP_200_OK)

@api_view(["POST"])
def returnFrontPage(request):
    data = request.data
    try:
        if (not data["selection"]):
            data["selection"] = "hot"
        if (not data["time"]): 
            data["time"] = "week"
        if (not data["given_limit"]):
            data["given_limit"] = 15
    except:
        return ("404")