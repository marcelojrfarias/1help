import { getCustomRepository } from 'typeorm';
import DiscountsRepository from '../repositories/DiscountsRepository';
import Discount from '../models/Discount';

import AppError from '../errors/AppError';

interface Request {
  user_id: string;
  price: number;
}

class BestDiscountService {
  public async execute({
    user_id,
    price,
  }: Request): Promise<Discount | undefined> {
    const discountsRepository = getCustomRepository(DiscountsRepository);

    const bestAbsoluteDiscount = await discountsRepository.findBestAbsolute(
      user_id,
    );
    const bestPercentageDiscount = await discountsRepository.findBestPercentage(
      user_id,
    );

    if (!bestAbsoluteDiscount && !bestPercentageDiscount) {
      throw new AppError('No discount found for this user!', 404);
    }

    let bestDiscount;
    if (!bestAbsoluteDiscount) {
      bestDiscount = bestPercentageDiscount;
    } else if (!bestPercentageDiscount) {
      bestDiscount = bestAbsoluteDiscount;
    } else {
      bestDiscount =
        (bestPercentageDiscount.value / 100.0) * price >=
        bestAbsoluteDiscount.value
          ? bestPercentageDiscount
          : bestAbsoluteDiscount;
    }

    return bestDiscount;
  }
}

export default BestDiscountService;
