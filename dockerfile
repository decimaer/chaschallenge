# JS Runtime
FROM node:19-alpine3.16

WORKDIR /api
COPY api .

RUN npm install
RUN npm install -g pm2
RUN pm2 install typescript

EXPOSE 8888

CMD ["pm2-runtime", "server.ts"]