# Almundo Examen Frontend
El exámen está compuesto por dos aplicaciones, un backend escrito en NodeJS el cual expondrá
una API REST para la interacción con la aplicación frontend.
Adjunto a este documento encontrarás recursos que facilitarán el exámen, para que te enfoques
en lo realmente importante.

## Ejercicio 1: API Rest NodeJS

Se encuentra en el directorio server/

Se crearon los siguientes endpoint para cumplir con lo solicitado:

- Mostrar todos los hoteles GET http://localhost:8000/hotels
- Búsqueda de hoteles por nombre y/o estrellas 
  GET http://localhost:8000//hotels/search?name=Stefanos&star3=true

## Ejercicio 2: Frontend

El frontend se puede visualizar en http://localhost:4200


## Extras

Se creo la base de datos almundo en MongoDB para persistir los datos

Se implemento el CRUD de hoteles (solo a nivel API), se crearon los siguientes endpoint, se adjunta el POSTMAN Almundo.postman_collection.json

## Stack Tecnológico
- Node v8.16.0
- MongoDB Server 4.0
- Angular 5

## Instalación

### Base de datos

- Instalar MongoDB Server 4.0
- Ingresar a la consola MongoDB y crear la base de datos almundo "use almundo"
- Ingresar a la consola MongoDB y crear la colección hotels "db.createCollection("hotels");"
- Ejecutar el script script_hotels_mongodb.json para insertar los datos de data.json

### Backend

- cd server
- npm install

### FrontEnd

- npm install

### Ejecución

- npm run dev





