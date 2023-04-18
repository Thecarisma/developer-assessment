# syntax=docker/dockerfile:1
FROM node:19-alpine as builder
WORKDIR /web
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19.0
RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir -p /var/www/html
WORKDIR /var/www/html
COPY --from=builder /web/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
