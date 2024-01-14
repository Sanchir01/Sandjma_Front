FROM node:20.9.0-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

RUN [ "npm", "run", "start" ]