from django.urls import path
from . import views

urlpatterns = [
    path('test/', views.test),
    path('initial-request/', views.getLink),
    path('receive-credentials/', views.receiveCredentials),
    path('check-if-logged-in/', views.checkIfLoggedIn),
    path('test-post/', views.testPost),
]