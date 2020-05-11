import { EntityRepository, Repository } from 'typeorm';
import Discount from '../models/Discount';

@EntityRepository(Discount)
class DiscountsRepository extends Repository<Discount> {
  public async findBestAbsolute(
    user_id: string,
  ): Promise<Discount | undefined> {
    const discount = this.findOne({
      where: {
        user_id,
        type: 'absolute',
      },
      order: {
        value: 'DESC',
      },
    });
    return discount;
  }

  public async findBestPercentage(
    user_id: string,
  ): Promise<Discount | undefined> {
    const discount = this.findOne({
      where: {
        user_id,
        type: 'percentage',
      },
      order: {
        value: 'DESC',
      },
    });
    return discount;
  }
}

export default DiscountsRepository;
