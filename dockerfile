# MongoDB
FROM mongo:6.0

# Runtime
FROM node:19-alpine3.16

WORKDIR /app

COPY api .

EXPOSE 8888

RUN npm install

CMD ["npm", "run", "server.ts"]