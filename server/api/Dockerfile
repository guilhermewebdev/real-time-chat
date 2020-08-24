FROM node

WORKDIR /usr/share/app

ADD yarn.lock .
ADD package.json .

RUN yarn install


RUN chown -R node /usr/share/app 

USER node

ENV PATH /app/node_modules/.bin:$PATH