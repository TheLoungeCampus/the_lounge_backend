# Docker Deploy

## Docker Setup
* Turn on docker
* Open Settings
* Select Shared Drives
* Select drive that holds project
* Click apply

## Build / Run
* Open file location in terminal or git bash
* Run command 

        'docker build -t theloungebackend .'
*This may take a while to download all of the images. It will error out if there is a problem otherwise wair patiently*\
* Run command 
        
        './docker_dev_start.sh'
*This will automatically download create and run a container for mongodb if you haven't done this before*

**If this all succeeds then the containers are ready to run**