from django.db import models

class Images(models.Model):
    image = models.ImageField()
    word = models.CharField(max_length = 30)
    users = models.CharField(max_length=30)

    def __str__(self):
        return self.word
