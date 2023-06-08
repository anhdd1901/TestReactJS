# Step 1
FROM node:16.14.2-alpine3.15 as build-step
RUN mkdir /app

WORKDIR /app
COPY package.json /app
RUN yarn install --only=production
COPY . /app
RUN yarn build

# Stage 2
FROM nginx:1.21.6-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
# # CMD ["nginx", "-g", "daemon off;"]