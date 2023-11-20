const sequelize = require('sequelize');

const op = sequelize.Op;

const createEntity = async (app, { name, description }) => {
  const { db } = app.locals;
  const entity = await db.Entity.create({
    name,
    description,
  });
  return entity;
};

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