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

 ###STAGE 2: Run ###
 FROM nginx:alpine
 RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/conf.d/default.conf && rm -rf /etc/nginx/nginx.conf
 COPY frontend-nginx.conf /etc/nginx
 COPY --from=build /app/dist/angular-frontend /usr/share/nginx/html

 #Optional to mention expose as it will be taken by nginx sever , port 80 wil be taken from nginx server
 EXPOSE 80