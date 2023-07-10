
FROM node


WORKDIR /src


COPY . .


EXPOSE 1234


CMD node server.js

