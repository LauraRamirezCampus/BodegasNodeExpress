# BodegasNodeExpress

Este proyecto es una aplicacion con Node.js conectado con una base de datos creada en MySQL y su validacion de datos respectiva donde se busca gestionar los datos de las tablas:
bodegas, historiales, inventarios, productos y usuarios

## __Instalacion__

**1.** Clona este repositorio

link :
https://github.com/LauraRamirezCampus/BodegasNodeExpress

**2.** Asegurate de tener instalado node: con el comando npm install node en la terminal

**3**Instala las dependencias del proyecto ejecutado el siguiente comando en la terminal del proyecto: npm install, esto instalará automaticamente las dependencias que tenemos previamente guardadas en el archivo package.json estas son :

* "dotenv": "^16.3.1",
* "express": "^4.18.2",
* "mysql2": "^3.5.1",
* "node": "^20.4.0",
* "nodemon": "^3.0.1

**4.** Configura la conexión a la base de datos MySQL2 modificando los valores de host, user, password y database en el archivo .env .

**5.** Crea la base de datos e importa los datos de prueba a la misma ejecutando el script config/db.sql en MySQL. 

## __EndPoint Creados__
**Listar la bodegas alfabeticamente**
* Método: GET
* Ruta: http://127.1.1.1:5500/bodegas

**Crear una bodega:**

* Método: POST
* Ruta: http://127.1.1.1:5500/bodegas
* Datos de entrada:

   ```json
  {
    "nombre": "Bodega 13.2",
    "id_responsable": 11,
    "estado": 1,
    "created_by": 11,
    "update_by": null,
    "created_at": "2022-07-02T01:29:51.000Z",
    "updated_at": "2022-07-02T01:29:51.000Z",
    "deleted_at": "2023-07-11T22:19:27.000Z"
  
  }
  ```
  
**Listar productos en orden descendente por cantidad:**

* Método: GET
* Ruta: http://127.1.1.1:5500/inventarios

**Insertar un producto**

* Método: POST
* Ruta: http://127.1.1.1:5500/productos
* Datos de entrada:

  ```json
  {
    "id_bodega":11,
    "id_producto":27,
    "cantidad":12
  }
  ```


  Instalamos la libreria para manejar DTO y Configuramos nuestro entorno de desarrollo

  npm init -y

* Creamos el archivo tscongig.json e ingresamos lo siguiente:
    


```json
  {
    "compilerOptions": {
        "target": "es6", 
        "module": "ES6", 
        "moduleResolution": "node",
        "outDir": "./controller", 
        "esModuleInterop": true,
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}
```
**hacemos validos los cambios con el siguiente comando:**

```"tsc -w"```