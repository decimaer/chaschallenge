# backend
FROM node:19-alpine3.16

WORKDIR /app/api

COPY api /app/api

RUN npm install

CMD ["npm", "run", "start:prod"]

# frontend
FROM nginx:stable-alpine3.17-slim

COPY client/dist /usr/share/nginx/html


