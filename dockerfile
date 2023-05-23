# JS Runtime
FROM node:19-alpine3.16

WORKDIR /api

COPY api .

RUN npm install

CMD ["npm", "run", "start:prod"]