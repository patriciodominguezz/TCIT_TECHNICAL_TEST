const {
    postCreateEntity,
    getEntities,
    deleteEntity,
} = require('./entity.ctrl');


// rutas
module.exports = (app, router) => {
  router.post('/entity/create', postCreateEntity(app));
  router.get('/entity/getAll', getEntities(app));
  router.delete('/entity/delete/:id', deleteEntity(app));
};