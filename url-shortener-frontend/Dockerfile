FROM node:18.12.1-bullseye-slim

RUN mkdir /url-shortener-frontend
WORKDIR /url-shortener-frontend

RUN npm install -g @angular/cli@15

COPY package.json package-lock.json ./
RUN npm i

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]