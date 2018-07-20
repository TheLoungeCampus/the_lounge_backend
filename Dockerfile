# Install
FROM node:10-slim

LABEL name=TheLoungeOnCampus maintainer=theloungeoncampus@gmail.com

# Update OS packages for latest security etc. Remove sources afterwards
RUN apt-get update && apt-get upgrade -y && \
    apt-get --no-install-recommends -q -y install supervisor && \
    rm -rf /var/lib/apt/lists/*

# Expose port to access container
EXPOSE 3214

# Install glonal npm modules
RUN npm install -g grunt-cli supervisor

# The "app" directory in the docker container will contain the project code
WORKDIR /app

# Copy packacke.json to app
COPY package.json /app/

# Install package.json
RUN npm install

# Copy in all of the project's files
COPY . /app



