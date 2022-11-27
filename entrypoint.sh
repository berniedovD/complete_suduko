#!/bin/sh
python manage.py collectstatic

gunicorn -c gunicorn_django.py project3.wsgi

