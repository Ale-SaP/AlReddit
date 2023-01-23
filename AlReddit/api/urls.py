from django.urls import path
from . import views

urlpatterns = [
    path('test/', views.test),
    path('check/state=<slug:state>&code=<slug:code>', views.check),
    path('initial-request/', views.getLink)
]