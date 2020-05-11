import { Router } from 'express';

import CreateDiscountService from '../services/CreateDiscountService';
import UpdateDiscountService from '../services/UpdateDiscountService';
import DeleteDiscountService from '../services/DeleteDiscountService';
import UpdateDiscountNameService from '../services/UpdateDiscountNameService';

import validateDiscountId from '../middlewares/validateDiscountId';
import validateUserId from '../middlewares/validateUserId';
import validateDiscountType from '../middlewares/validateDiscountType';
import validateDiscountValue from '../middlewares/validateDiscountValue';

const discountsRouter = Router();

discountsRouter.use('/:id', validateDiscountId);

discountsRouter.post(
  '/',
  validateUserId,
  validateDiscountType,
  validateDiscountValue,
  async (request, response) => {
    const { name, type, value, user_id } = request.body;

    const createDiscount = new CreateDiscountService();

    const discount = await createDiscount.execute({
      name,
      type,
      value,
      user_id,
    });

    response.status(201).json(discount);
  },
);

discountsRouter.put(
  '/:id',
  validateUserId,
  validateDiscountType,
  validateDiscountValue,
  async (request, response) => {
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
  },
);

discountsRouter.patch('/:id', async (request, response) => {
  const { name } = request.body;
  const { id } = request.params;

  const updateDiscountName = new UpdateDiscountNameService();

  const discount = await updateDiscountName.execute({
    id,
    name,
  });

  response.status(200).json(discount);
});

discountsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteDiscount = new DeleteDiscountService();

  await deleteDiscount.execute({
    id,
  });

  response.status(200).send();
});

export default discountsRouter;
