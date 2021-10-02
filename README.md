# users
Docker Yarn fastify mongodb hello world

Este repositorio es un hola mundo utilizando:
* fastify : https://www.fastify.io/
* fastify-swagger : https://github.com/fastify/fastify-swagger 
* fastify-mongodb : https://github.com/fastify/fastify-mongodb

Forma parte del ejemplo de como levantar multiples apps con docker-compose, y git sudmodules.
https://github.com/taller-de-programacion-2/integration

## Ejecucion
Para ejecutar la app es necesario pasar como envvar la url del mongodb y puerto donde escuchar request.
Luego ejecutar `yarn start`
Por ej:

```

PORT=8080 MONGODB_URL=mongodb://localhost:27017/users yarn start

```
