from django.urls import path
from . import views

urlpatterns = [path("hello/", views.say_hello),
               path("puzzles/", views.puzzles),
               path("puzzleDB/", views.puzzleDB),
               path('', views.say_hello)]
