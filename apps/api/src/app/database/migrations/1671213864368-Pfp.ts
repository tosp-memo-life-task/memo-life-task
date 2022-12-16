import { MigrationInterface, QueryRunner } from 'typeorm';

export class Pfp1671213864368 implements MigrationInterface {
  name = 'Pfp1671213864368';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD \`pfp\` varchar(255) NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`pfp\``);
  }
}
