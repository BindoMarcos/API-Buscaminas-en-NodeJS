# API-Buscaminas-en-NodeJS

La API hace uso de una base de Datos MySQL 
- Si usa XAMPP o similar, dejar el codigo como esta 
- En caso de Usar MySQLWorkBench tendra que modificar el `user` y `password` del archivo `database`.
```JavaScript

const dbConnection = mysql.createConnection({
host: 'localhost',
port: 3306,
user: 'root',
password: '',
database: 'buscaminas'
});
```
### -Pasos para Usar la Base de Datos :clipboard: 
1. Crear un Nuevo Schema si usa MySqlWorkBench o Base de Datos si usa XAMPP (o similar) con el nombre `buscaminas`.
2. Una vez descargado el codigo abrirlo y ejecutar en la terminal el comando `npm run start`.
    - La consola tiene que mostrar los mensajes `Server running on port 3000` y `Connected to Database`, en caso contrario volver a revisar los pasos anteriores.
  
### -Pasos post-despliegue
 - 2 Opciones disponibles:
    - Utilizando PostMan [Link a la Documentacion](https://documenter.getpostman.com/view/18219574/Uyxbpp6U)
    - Dentro del codigo descargado hay un archivo llamado `request.http` (Utilizando la Extension Rest Client de Visual Code).
