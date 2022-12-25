FROM node:alpine3.14 as node
   WORKDIR /usr/local/app
   COPY ./ /usr/local/app/
   COPY package.json /app/
   RUN npm install
   RUN npm run build

   FROM nginxinc/nginx-unprivileged
   COPY  --from=node /usr/local/app/dist/demo /usr/share/nginx/html
   COPY ./nginx.conf /etc/nginx/conf.d/default.conf
   EXPOSE 8080
