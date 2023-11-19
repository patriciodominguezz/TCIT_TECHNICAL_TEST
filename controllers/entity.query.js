const sequelize = require("sequelize");


const createEntity = async (app, { name, description }) => {
  const { db } = app.locals;
  const entity = await db.Entity.create({
    name,
    description,
  });
  return entity;
};

const getAllEntities = async (app) => {
  const { db } = app.locals;
  const entities = await db.Entity.findAll({
    attributes: ["id", "name", "description"],
  });
  return entities;
};

const deleteEntity = async (app, { id }) => {
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
  getAllEntities,
  deleteEntity,
};