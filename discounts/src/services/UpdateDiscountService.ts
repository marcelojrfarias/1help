import { getCustomRepository } from 'typeorm';
import Discount from '../models/Discount';
import DiscountsRepository from '../repositories/DiscountsRepository';
import AppError from '../errors/AppError';

enum DiscountType {
  ABSOLUTE = 'absolute',
  PERCENTAGE = 'percentage',
}

interface Request {
  id: string;
  name: string;
  type: DiscountType;
  value: number;
  user_id: string;
}

class UpdateDiscountService {
  public async execute({
    id,
    name,
    type,
    value,
    user_id,
  }: Request): Promise<Discount> {
    const discountsRepository = getCustomRepository(DiscountsRepository);

    const discount = await discountsRepository.findOne(id);

    if (!discount) {
      throw new AppError('Discount not found!', 404);
    }

    const updatedDiscount = Object.assign(discount, {
      name,
      type,
      value,
      user_id,
    });

    await discountsRepository.save(updatedDiscount);

    return updatedDiscount;
  }
}

export default UpdateDiscountService;
