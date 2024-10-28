# EventMesh-webhook-node

Este proyecto es un cliente en Node.js para interactuar con el servicio EventMesh. Permite recibir mensajes utilizando la API REST de EventMesh a través de un webhook.

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:
- Node.js
- Entorno donde publicar el servicio como Ngrok.

## Configuración

Debes crear un archivo `.env` dentro de tu proyecto con la variable `PORT` con el puerto por el que se consumirán los mensajes.

## Ejecución

Para ejecutar el cliente, sigue estos pasos:

1.- Clona el repositorio.

2.- Activa el entorno que hará visible el servicio a través de una URL.

3.- Abre una terminal en el directorio donde se encuentra el archivo.

4.- Ejecuta el archivo index.js

Esto hará que se levante el servicio y esté esperando mensajes hasta que se detenga la ejecución.
