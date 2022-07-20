FROM node:14

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
