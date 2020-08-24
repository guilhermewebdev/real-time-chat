FROM node

WORKDIR /usr/share/app

ADD yarn.lock .
ADD package.json .

RUN yarn install

ENV PATH /app/node_modules/.bin:$PATH

RUN useradd app \
    && chown -R app /usr/share/app 

USER app