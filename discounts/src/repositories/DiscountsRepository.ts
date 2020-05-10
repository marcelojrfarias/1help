import { EntityRepository, Repository } from 'typeorm';
import Discount from '../models/Discount';

@EntityRepository(Discount)
class DiscountsRepository extends Repository<Discount> {}

export default DiscountsRepository;
