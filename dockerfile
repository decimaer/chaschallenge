# JS Runtime
FROM node:19-alpine3.16

WORKDIR /api
COPY api .

RUN npm install

EXPOSE 8888

CMD ["npm", "run", "dev"]