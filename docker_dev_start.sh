#!/bin/bash
set -o nounset
set -o errexit

# Dev port
DEV_PORT=3214

# Set the project name
PROJECT_NAME="theloungebackend"

MONGO_IMAGE_ID=$(docker ps -a | grep mongo | head -n 1 | cut -d' ' -f1)

# Create Mongo container
if [[ $MONGO_IMAGE_ID = "" ]];then
    echo "Mongo image for dev doesn't exist. Downloading image and creating"
    docker run -d -p 27017:27017 --name mongodb mongo
    echo "Waiting for mongo to load"
    sleep 5
    # TODO Add script to load dev mongo documents
else
    echo "MongoDB exists. Starting $MONGO_IMAGE_ID"
    docker start $MONGO_IMAGE_ID
fi

APP_SOURCE=$(pwd)

echo $APP_SOURCE
echo "after directory"

winpty docker run -it \
    --rm \
    --publish=$DEV_PORT:$DEV_PORT \
    --env=NODE_ENV=local \
    --volume=$APP_SOURCE:/app \
    --volume=etc/localtime:/etc/localtime:ro \
    --link mongodb:mongodb \
    --name $PROJECT_NAME \
    $PROJECT_NAME \
    /bin/bash