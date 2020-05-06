FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install
# RUN yarn install --production

COPY . .

EXPOSE 3333

CMD [ "yarn", "start" ]
