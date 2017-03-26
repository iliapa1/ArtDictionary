from django.db import models
from django.contrib.auth.models import User

class Person(User):
    pass

class Images(models.Model):
    image = models.ImageField()
    word = models.CharField(max_length = 30)
    users = models.ForeignKey('Person', on_delete = models.CASCADE)

    def __str__(self):
        return self.word
