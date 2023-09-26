FROM node:16-alpine3.15 as builder
WORKDIR /code
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder code/dist /usr/share/nginx/build