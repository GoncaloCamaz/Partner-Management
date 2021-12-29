#This dockerfile is used to run this service on a PC
FROM node:15 as build
# set working directory
# this is the working folder in the container
# from which the app will be running from
WORKDIR /home/app/frontend
# copy everything to /app directory
# as opposed to on dev, in prod everything is copied to docker
COPY . /home/app/frontend
# install and cache app dependencies
COPY package*.json /home/app/frontend/

RUN npm install

COPY . /home/app/frontend

EXPOSE 3000

CMD ["npm","start"]