 ### STAGE 1: Build ###
 FROM node:16 as build

 # Create app directory
 WORKDIR /app

 # Install app dependencies
 # A wildcard is used to ensure both package.json AND package-lock.json are copied
 # where available (npm@5+)
 COPY package*.json ./
 RUN npm install

 # Bundle app source
 COPY . .


 RUN npm run build

# Use Nginx to serve the built React app
FROM nginx:1.23-alpine

# Copy the custom Nginx configuration file into the container
# COPY frontend-nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built React files to the Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

 #Optional to mention expose as it will be taken by nginx sever , port 80 wil be taken from nginx server
 EXPOSE 80