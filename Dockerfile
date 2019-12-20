FROM node:11.15.0-alpine as build-stage
WORKDIR /app
COPY ./ /app/
RUN npm install
ARG configuration=production
RUN npm run build:prod -- --output-path=./dist/out --configuration=$configuration
FROM nginx:1.16.0-alpine
COPY --from=build-stage /app/dist/out /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]



