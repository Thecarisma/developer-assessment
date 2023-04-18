# syntax=docker/dockerfile:1
FROM node:19-alpine as builder
WORKDIR /web
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

RUN pip install --no-cache-dir -r requirements.txt

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -Rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
