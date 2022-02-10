FROM node:12-alpine as builder

RUN apk add --update git

WORKDIR /app
COPY ./package.json ./

#Installing dependecy and creating build
RUN npm install
COPY . .
RUN npm run build

#prepare Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
#fire nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]