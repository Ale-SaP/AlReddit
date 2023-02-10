from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .reddit_api import firstCall
from .statesLog import logState, searchForState

from .models import State
from .serializers import StateSerializer

# Create your views here.
@api_view(['GET'])
def test(request):
    return Response({"Test": "Passed", "True" : True, "False" : False})

@api_view(["GET"])
def getLink(request):
    try:
        content = firstCall()
        return Response({"link": content[0], "successful": True})
    except:
        return Response({"link": "error", "successful": False})

@api_view(["POST"])
def receiveCredentials(request):
    print(request.data)
    return Response({"received": True}) 

@api_view(["GET"])
def showState(request, stateSent):
    try:
        get_state = State.objects.get(state=stateSent)
        serializer = StateSerializer(get_state)
        return Response(serializer.data)
    except State.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(["GET"])
def addState(request, stateSent):
    createstate = State(state=stateSent)
    createstate.save()
    return Response({"saved state": stateSent})

@api_view(["GET"])
def deleteState(request, stateSent):
    try:
        get_state = State.objects.get(state=stateSent)
        get_state.delete()
        return Response({"deleted state": stateSent})
    except State.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)