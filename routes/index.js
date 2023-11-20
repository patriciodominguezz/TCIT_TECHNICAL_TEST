const express = require('express');
const entity = require('../controllers/entity');

module.exports = (app) => {
  const router = express.Router();

  entity(app, router);

  return router;
};
