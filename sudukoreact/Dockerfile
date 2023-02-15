# Dockerfile for linesheet frontend app
FROM node
ARG APP_SRC=./

# Install system dependencies (as root)
RUN apt-get update
RUN apt-get install -y htop

WORKDIR /app

COPY ${APP_SRC}/package.json ./
COPY ${APP_SRC}/package-lock.json ./

# run npm build
ENV PATH /app/node_modules/.bin:$PATH
#RUN npm ci

COPY ${APP_SRC} /app

#RUN rm -rf /app/build
#RUN npm run build
CMD tail -f /dev/null
