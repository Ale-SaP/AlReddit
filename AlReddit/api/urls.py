from django.urls import path
from . import views

urlpatterns = [
    path('test/', views.test),
    path('initial-request/', views.getLink),
    path('receive-credentials/', views.receiveCredentials),

    path('show-state/<slug:stateSent>', views.showState),
    path('delete-state/<slug:stateSent>', views.deleteState),
    path('add-state/<slug:stateSent>', views.addState),

]