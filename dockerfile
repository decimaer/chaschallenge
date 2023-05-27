# App
FROM node:19-alpine3.16

WORKDIR /app

COPY api /app/api
COPY client /app/client

RUN npm install

CMD ["npm", "run", "start:prod"]
