import { getCustomRepository } from 'typeorm';
import Discount from '../models/Discount';
import DiscountsRepository from '../repositories/DiscountsRepository';
import AppError from '../errors/AppError';

interface Request {
  id: string;
  name: string;
}

class UpdateDiscountNameService {
  public async execute({ id, name }: Request): Promise<Discount> {
    const discountsRepository = getCustomRepository(DiscountsRepository);

    const discount = await discountsRepository.findOne(id);

    if (!discount) {
      throw new AppError('Discount not found!', 404);
    }

    const updatedDiscount = Object.assign(discount, {
      name,
    });

    await discountsRepository.save(updatedDiscount);

    return updatedDiscount;
  }
}

export default UpdateDiscountNameService;
