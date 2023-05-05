# MongoDB
FROM mongo:6.0

# Web server
FROM nginx:latest

# Backend
FROM node:19-alpine3.16


EXPOSE 8080
EXPOSE 27017

CMD nginx -g "daemon off;"