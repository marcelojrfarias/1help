import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Discount;
