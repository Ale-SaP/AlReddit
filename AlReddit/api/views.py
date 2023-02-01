from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .script import firstCall
from .statesLog import logState, searchForState

# Create your views here.
@api_view(['GET'])
def test(request):
    return Response({"Test": "Passed", "True" : True, "False" : False})

@api_view(["GET"])
def getLink(request):
    try:
        content = firstCall()
        logState(content[1])
        return Response({"link": content[0], "successful": True})
    except:
        return Response({"link": "error", "successful": False})

@api_view(["POST"])
def receiveCredentials(request):
    print(request.data)
    return Response({"received": True}) 