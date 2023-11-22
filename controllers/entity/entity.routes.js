const {
    postCreateEntity,
    getEntities,
    deleteEntity,
} = require('./entity.ctrl');


// rutas, aqui se pueden colocar restricciones para acceder a las rutas como por ejemplo token de autorizacion o autorizacion de roles
module.exports = (app, router) => {
  router.post('/entity/create', postCreateEntity(app));
  router.get('/entity/getAll', getEntities(app));
  router.delete('/entity/delete/:id', deleteEntity(app));
};