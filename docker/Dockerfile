FROM node

WORKDIR /app

COPY package*.json ./
COPY server.js ./

RUN npm i

CMD ["node","server.js"]