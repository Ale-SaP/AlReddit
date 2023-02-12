from django.db import models
import datetime

# Create your models here

class State(models.Model):
    state = models.IntegerField("states", unique=True)
    date_created = models.DateField("date_created", auto_now_add=True)

    #def __str__(self):
    #    return f"{self.state} saved at {self.date_created}"