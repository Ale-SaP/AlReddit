from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .script import firstCall

# Create your views here.
@api_view(['GET'])
def test(request):
    return Response({"Test": "Passed", "True" : True, "False" : False})

@api_view(["GET"])
def check(request, state, code):
    return Response({"state": state, "code": code, "check": "Have'nt checked"})

@api_view(["GET"])
def getLink(request):
    try:
        link = firstCall()
        return Response({"link": link, "successful": True})
    except:
        return Response({"link": "error", "successful": False})

@api_view(["POST"])
def receiveCredentials(request):
    print(request.data)
    return Response({"received": True}) 