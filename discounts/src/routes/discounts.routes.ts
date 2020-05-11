import { Router } from 'express';

import CreateDiscountService from '../services/CreateDiscountService';
import UpdateDiscountService from '../services/UpdateDiscountService';
import DeleteDiscountService from '../services/DeleteDiscountService';
import UpdateDiscountNameService from '../services/UpdateDiscountNameService';

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

    response.status(201).json(discount);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

discountsRouter.put('/:id', async (request, response) => {
  try {
    const { name, type, value, user_id } = request.body;
    const { id } = request.params;

    const updateDiscount = new UpdateDiscountService();

    const discount = await updateDiscount.execute({
      id,
      name,
      type,
      value,
      user_id,
    });

    response.status(200).json(discount);
  } catch (err) {
    return response.status(404).json({ error: err.message });
  }
});

discountsRouter.patch('/:id', async (request, response) => {
  try {
    const { name } = request.body;
    const { id } = request.params;

    const updateDiscountName = new UpdateDiscountNameService();

    const discount = await updateDiscountName.execute({
      id,
      name,
    });

    response.status(200).json(discount);
  } catch (err) {
    return response.status(404).json({ error: err.message });
  }
});

discountsRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const deleteDiscount = new DeleteDiscountService();

    await deleteDiscount.execute({
      id,
    });

    response.status(200).send();
  } catch (err) {
    return response.status(404).json({ error: err.message });
  }
});

export default discountsRouter;
