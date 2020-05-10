import { Router } from 'express';

import CreateDiscountService from '../services/CreateDiscountService';

const discountsRouter = Router();

discountsRouter.post('/', async (request, response) => {
  try {
    const { name, type, value, user_id } = request.body;

    const createDiscount = new CreateDiscountService();

    const discount = await createDiscount.execute({
      name,
      type,
      value,
      user_id,
    });

    response.json(discount);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default discountsRouter;
