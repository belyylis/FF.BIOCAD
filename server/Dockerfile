FROM node:16.18.1-alpine

WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .

CMD [ "yarn", "start" ]