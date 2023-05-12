# JS Runtime
FROM node:19-alpine3.16

WORKDIR /api
COPY api .

RUN npm install
RUN npm install pm2

EXPOSE 8888

CMD ["npm", "run", "prod"]