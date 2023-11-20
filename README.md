# Pasos para ejecutar el proyecto

### 1.  Creación de base de datos

* Acceder a PostgreSQL 
```
sudo -u postgres psql
```

* Crear una Nueva Base de Datos

```
CREATE DATABASE tcit_test;
```
* Crear un Usuario y Asignarle una Contraseña

```
CREATE USER tcit_test WITH PASSWORD 'tcit_test';
```

* Otorgar Privilegios al Usuario sobre la Base de Datos

```
GRANT ALL PRIVILEGES ON DATABASE tcit_test TO tcit_test;
```

### 2.  Instalar dependencias

* Instalar Node.js v16

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.bashrc  # reinicia la terminal
nvm install 16.17.1
nvm use 16.17.1
```

* Instalar package

```
npm install
```

### 3.  Agregar variables de entorno

* crear archivo .env que contenga las siguientes variables

```
NODE_ENV=development
PORT=8080
BASE_URL=http://localhost:3001

DB_HOST=localhost
DB_USERNAME=tcit_test
DB_PASSWORD=tcit_test
DB_NAME=tcit_test
DB_PORT=5432
```

### 4. Ejecutar migraciones

```
npm run migrate
```

### 5. Ejecutar codigo

* Para inicializar el backend, abra una terminal y ejecute

```
npm run dev
```
* Para inicializar el frontend, abra una terminal y ejecute

```
npm run start
```
