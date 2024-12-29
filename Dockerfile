FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

COPY pnpm-lock.yaml ./

RUN npm i -g pnpm

RUN pnpm install

COPY . ./

EXPOSE 8000

CMD ["node", "server.js"]