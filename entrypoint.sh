#!/bin/sh

sleep 15
python manage.py collectstatic --no-input

python manage.py migrate
python manage.py createsuperuser --no-input --username=admin --email=dov@gyfu.com
gunicorn -c gunicorn_django.py project3.wsgi

