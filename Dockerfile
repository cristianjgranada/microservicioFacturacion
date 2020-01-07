FROM node:latest

WORKDIR /microserviciofacturacion

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
