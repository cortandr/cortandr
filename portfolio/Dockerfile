FROM node:10.3.0

WORKDIR /website

COPY package*.json/webite/

RUN nmp install

COPY ./website/

EXPOSE 300

CMD ["npm", "start"]

