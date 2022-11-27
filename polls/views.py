from django.shortcuts import render

from django.http import HttpResponse


def dlog(message):
    f1 = open("/logs/django.log", "a")
    print (message)
    f1.write(message + "\n")
def index(request):
    dlog ("--------------- in index function of polls.views")
    return HttpResponse("Hello, world. You're at the polls index.")
# Create your views here.
