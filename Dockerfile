FROM node
EXPOSE 3000
RUN apt-get update && apt-get install -y \
    git \
	npm \
	vim 
RUN git clone https://github.com/AustinMCrane/myminiservice.git 
WORKDIR /myminiservice
RUN npm install
RUN npm test

