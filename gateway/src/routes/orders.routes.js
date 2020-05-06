const { Router } = require('express');

const ordersRouter = Router();

ordersRouter.get('/', (request, response) => {
  return response.json({ route: 'price' });
});

module.exports = ordersRouter;
