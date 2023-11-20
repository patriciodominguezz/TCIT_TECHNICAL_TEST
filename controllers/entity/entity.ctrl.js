const {
  createEntity,
  findAllEntities,
  destroyEntity,
} = require("./entity.query");

const postCreateEntity = (app) => async (req, res) => {
  const { name, description } = req.body;
  try {
    if (!name || !description) {
      throw new Error("name and description are required");
    }
    const entity = await createEntity(app, { name, description });
    res.json(entity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getEntities = (app) => async (req, res) => {
  const { searchValue } = req.query;
  try {
    const entities = await findAllEntities(app, { searchValue });
    res.json(entities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEntity = (app) => async (req, res) => {
  const { id } = req.params;
  try {
    const entity = await destroyEntity(app, { id });
    res.json({ message: 'La entidad ha sido eliminada exitosamente', entity });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postCreateEntity,
  getEntities,
  deleteEntity,
};
