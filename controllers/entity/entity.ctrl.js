const {
  createEntity,
  findAllEntities,
  destroyEntity,
} = require("./entity.query");

const postCreateEntity = (app) => async (req, res) => {
  console.log("postCreateEntity", req)
  const { name, description } = req.body;
  console.log(req.body);
  const entity = await createEntity(app, { name, description });
  res.json(entity);
};

const getEntities = (app) => async (req, res) => {
  const entities = await findAllEntities(app);
  res.json(entities);
};

const deleteEntity = (app) => async (req, res) => {
  const { id } = req.params;
  const entity = await destroyEntity(app, { id });
  res.json(entity);
};

module.exports = {
  postCreateEntity,
  getEntities,
  deleteEntity,
};
