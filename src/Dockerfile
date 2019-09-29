FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm install build --prod

FROM nginx:alpine
COPY --from=node /app/dist/Employee-Management /usr/share/nginx/html