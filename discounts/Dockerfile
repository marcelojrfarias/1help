FROM node:lts-alpine

WORKDIR /home/node/app

COPY /package*.json /yarn.* ./
RUN yarn

COPY . .

CMD [ "yarn", "dev:server"]
