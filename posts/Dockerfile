FROM node:alpine

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./package

CMD ["npm", "start"]