const sequelize = require('sequelize');

const op = sequelize.Op;

// Creacion de entity en la BD
const createEntity = async (app, { name, description }) => {
  const { db } = app.locals;
  const entity = await db.Entity.create({
    name,
    description,
  });
  return entity;
};

// Obtenemos todas las entidades de la BD filtrando por el nombre en caso de que venga el filtro
const findAllEntities = async (app, { searchValue }) => {
  const { db } = app.locals;

  const where = {};
  if (searchValue) {
    where.name = {
      [op.iLike]: `%${searchValue}%`,
    };
  }
  const entities = await db.Entity.findAll({
    attributes: ["id", "name", "description"],
    where,
  });
  return entities;
};

// Eliminamos una entidad de la BD
const destroyEntity = async (app, { id }) => {
  const { db } = app.locals;
  const entity = await db.Entity.destroy({
    where: {
      id,
    },
  });
  return entity;
}

module.exports = {
  createEntity,
  findAllEntities,
  destroyEntity,
};