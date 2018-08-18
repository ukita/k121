FROM node:10-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --only=production

COPY ./src .

ENV PORT 3000

EXPOSE ${PORT}

CMD [ "npm", "start" ]
