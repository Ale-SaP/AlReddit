from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .reddit_api import *
from .statesLog import logState, searchForState

from .models import State
from .serializers import StateSerializer

# Create your views here.
@api_view(['GET'])
def test(request):
    return Response({"Test": "Passed", "True" : True, "False" : False})

@api_view(["GET"])
def getLink(request):
    content = firstCall()
    return Response(content["url"])

@api_view(["POST"])
def receiveCredentials(request):
    data = request.data
    try:
        get_state = State.objects.get(state=data["state"])
        get_state.delete()
        auth = authorizeWithCode(data["code"])
        return Response(auth)

    except State.DoesNotExist:
        print("incorrect state")
        return Response(status=status.HTTP_404_NOT_FOUND)