FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV BACKEND_URL=http://backend:8000/api

CMD ["npm", "start"]

