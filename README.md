# Secret Santa App

## Requisitos
* Node.js
* Docker
* Docker Compose

## Backend

Para executar com Docker, primeiro altere a configuração `SENDGRID_API_KEY` com a sua chave de API do Sendgrid no arquivo `docker-compose.yml`

```bash
cd backend

docker-compose up
```

Caso não tenha Docker

```
cd backend

npm install

MONGO_DB_URI=${URL DO MONGO} SENDGRID_API_KEY=${SUA CHAVE DA API DO SENDGRID} npm start
```

## Frontend

Para executar o frontend:

```bash
cd frontend

npm install

API_URL=${URL DA API} npm start
```

# Licença
[MIT](https://github.com/ukita/k121/blob/master/LICENSE)
