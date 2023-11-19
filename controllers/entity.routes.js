const {
    postCreateEntity,
    getEntities,
    deleteEntity,
} = require('./entity.ctrl');


module.exports = (app, router) => {
  router.get('/entities', getEntities(app));
  router.post('/entity/create', postCreateEntity(app));
  router.delete('/entity/:id', deleteEntity(app));
};