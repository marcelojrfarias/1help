const { Router } = require('express');

const ordersRouter = Router();

ordersRouter.get('/', async (request, response) => {
  await request.producer.send({
    topic: 'get-price',
    messages: [
      { value: 'Get Price!' },
    ],
  })

  return response.json({ route: 'price' });
});

module.exports = ordersRouter;
