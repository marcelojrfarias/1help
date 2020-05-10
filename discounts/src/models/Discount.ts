import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum DiscountType {
  ABSOLUTE = 'absolute',
  PERCENTAGE = 'percentage',
}

@Entity('discounts')
class Discount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  name: string;

  @Column({
    type: 'enum',
    enum: DiscountType,
    default: DiscountType.ABSOLUTE,
  })
  type: DiscountType;

  @Column('integer')
  value: number;

  @Column('uuid')
  user_id: string;
}

export default Discount;
