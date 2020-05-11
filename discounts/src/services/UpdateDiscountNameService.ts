import { getCustomRepository } from 'typeorm';
import Discount from '../models/Discount';
import DiscountsRepository from '../repositories/DiscountsRepository';

interface Request {
  id: string;
  name: string;
}

class UpdateDiscountNameService {
  public async execute({ id, name }: Request): Promise<Discount> {
    const discountsRepository = getCustomRepository(DiscountsRepository);

    const discount = await discountsRepository.findOne(id);

    if (!discount) {
      throw new Error('Discount not found!');
    }

    const updatedDiscount = Object.assign(discount, {
      name,
    });

    await discountsRepository.save(updatedDiscount);

    return updatedDiscount;
  }
}

export default UpdateDiscountNameService;
