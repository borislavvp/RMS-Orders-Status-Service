# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app

ARG ENV                   

COPY ["./package.json", "./"]
COPY ["./tsconfig.json", "./"]
RUN npm install

COPY [".", "."]

EXPOSE 3333
EXPOSE 50051
CMD ["npm","start"]