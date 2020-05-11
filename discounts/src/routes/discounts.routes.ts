import { Router } from 'express';

import CreateDiscountService from '../services/CreateDiscountService';
import UpdateDiscountService from '../services/UpdateDiscountService';
import DeleteDiscountService from '../services/DeleteDiscountService';
import UpdateDiscountNameService from '../services/UpdateDiscountNameService';
import BestDiscountService from '../services/BestDiscountService';

import validateDiscountId from '../middlewares/validateDiscountId';
import validateDiscountUserId from '../middlewares/validateDiscountUserId';
import validateDiscountType from '../middlewares/validateDiscountType';
import validateDiscountValue from '../middlewares/validateDiscountValue';
import validateRequestPrice from '../middlewares/validateRequestPrice';

const discountsRouter = Router();

discountsRouter.get(
  '/best',
  validateDiscountUserId,
  validateRequestPrice,
  async (request, response) => {
    const { user_id, price } = request.body;

    const bestDiscount = new BestDiscountService();

    const discount = await bestDiscount.execute({ user_id, price });

    response.status(200).json(discount);
  },
);

discountsRouter.post(
  '/',
  validateDiscountUserId,
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
  validateDiscountId,
  validateDiscountUserId,
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

discountsRouter.patch('/:id', validateDiscountId, async (request, response) => {
  const { name } = request.body;
  const { id } = request.params;

  const updateDiscountName = new UpdateDiscountNameService();

  const discount = await updateDiscountName.execute({
    id,
    name,
  });

  response.status(200).json(discount);
});

discountsRouter.delete(
  '/:id',
  validateDiscountId,
  async (request, response) => {
    const { id } = request.params;

    const deleteDiscount = new DeleteDiscountService();

    await deleteDiscount.execute({
      id,
    });

    response.status(200).send();
  },
);

export default discountsRouter;
