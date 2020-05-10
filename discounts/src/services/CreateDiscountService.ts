import { getCustomRepository } from 'typeorm';
import Discount from '../models/Discount';
import DiscountsRepository from '../repositories/DiscountsRepository';

enum DiscountType {
  ABSOLUTE = 'absolute',
  PERCENTAGE = 'percentage',
}

interface Request {
  name: string;
  type: DiscountType;
  value: number;
  user_id: string;
}

class CreateDiscountService {
  public async execute({
    name,
    type,
    value,
    user_id,
  }: Request): Promise<Discount> {
    const discountsRepository = getCustomRepository(DiscountsRepository);

    const discount = discountsRepository.create({
      name,
      type,
      value,
      user_id,
    });

    await discountsRepository.save(discount);

    return discount;
  }
}

export default CreateDiscountService;
