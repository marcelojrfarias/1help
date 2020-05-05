const { Router } = require('express');

const ordersRouter = Router();

ordersRouter.get('/', async (request, response) => {
  return response.json({});
});

module.exports = ordersRouter;
