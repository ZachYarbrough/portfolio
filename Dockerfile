FROM node:18-alpine

# set the working directory to /app
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000

# start the server
CMD npm run dev
