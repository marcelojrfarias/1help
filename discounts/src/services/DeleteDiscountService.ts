import { getCustomRepository } from 'typeorm';
import Discount from '../models/Discount';
import DiscountsRepository from '../repositories/DiscountsRepository';

interface Request {
  id: string;
}

class DeleteDiscountService {
  public async execute({ id }: Request): Promise<void> {
    const discountsRepository = getCustomRepository(DiscountsRepository);

    const discount = await discountsRepository.findOne(id);

    if (!discount) {
      throw new Error('Discount not found!');
    }

    await discountsRepository.delete(discount);
  }
}

export default DeleteDiscountService;
