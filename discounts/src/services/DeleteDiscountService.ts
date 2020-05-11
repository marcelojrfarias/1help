import { getCustomRepository } from 'typeorm';
import DiscountsRepository from '../repositories/DiscountsRepository';

import AppError from '../errors/AppError';

interface Request {
  id: string;
}

class DeleteDiscountService {
  public async execute({ id }: Request): Promise<void> {
    const discountsRepository = getCustomRepository(DiscountsRepository);

    const discount = await discountsRepository.findOne(id);

    if (!discount) {
      throw new AppError('Discount not found!', 404);
    }

    await discountsRepository.delete(discount);
  }
}

export default DeleteDiscountService;
