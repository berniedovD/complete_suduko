from django.db import models

# Create your models here.
class Puzzle (models.Model):
    TYPE_CHOICES = [
        ('E', 'Easy'),
        ('M', 'Medium'),
        ('H', 'Hard')]
    
    puzzleID = models.CharField(max_length=4, primary_key=True)
    puzzleName = models.CharField(max_length=10)
    sudukoString = models.CharField(max_length=81)
    difficultyLevel = models.CharField(max_length=1, choices=TYPE_CHOICES)
    newfield = models.CharField(max_length=5)
    
