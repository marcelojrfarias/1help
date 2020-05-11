import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class RemoveIsUniqueFromDiscountNameColumn1589153804721
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('discounts', 'name');
    await queryRunner.addColumn(
      'discounts',
      new TableColumn({
        name: 'name',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('discounts', 'name');
    await queryRunner.addColumn(
      'discounts',
      new TableColumn({
        name: 'name',
        type: 'varchar',
        isUnique: true,
      }),
    );
  }
}
