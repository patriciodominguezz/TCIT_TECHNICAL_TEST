require('dotenv').config();

// Importacion de variables de entorno de la base de datos
const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  NODE_ENV,
} = process.env;

// Objeto que puede tener multiples configuraciones de la base de datos, 
// por ejemplo distintos ambientes como development, test y production
const dbConfigs = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'postgres',
    logging: false,
    define: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
};

module.exports = () => dbConfigs[NODE_ENV];