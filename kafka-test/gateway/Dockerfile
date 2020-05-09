FROM node:lts-alpine

WORKDIR /home/node/app

COPY /package*.json /yarn.* ./
RUN yarn

COPY . .

CMD [ "yarn", "start"]

EXPOSE 3334
