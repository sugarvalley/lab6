FROM node:alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY ./pliki ./pliki

FROM node:alpine
WORKDIR /app
COPY --from=build ./app .
CMD node ./pliki/index.js
EXPOSE 3000