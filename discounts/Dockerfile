FROM node:lts-alpine

WORKDIR /home/node/app

COPY /package*.json /yarn.* ./
RUN yarn

COPY . .

EXPOSE 3333

CMD [ "yarn", "dev:server"]
