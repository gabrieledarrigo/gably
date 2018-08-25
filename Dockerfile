FROM node:alpine
WORKDIR /usr/gably/api/
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 8080
CMD [ "npm", "start" ]
