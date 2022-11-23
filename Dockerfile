FROM python:3 
RUN pip install --upgrade pip
WORKDIR /usr/src/app
COPY . . 
RUN pip install --no-cache-dir -r requirements.txt
RUN chmod 777 ./entrypoint.sh
ENTRYPOINT ./entrypoint.sh

