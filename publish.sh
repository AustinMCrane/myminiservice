# deploy.sh
#! /bin/bash

SHA1=$1

# Deploy image to Docker Hub
docker push austinmcrane/myservice:$SHA1
