import { MigrationInterface, QueryRunner } from "typeorm";

export class ContactsColunlongLatData21718020275760 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "latitude" TYPE VARCHAR(20)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "latitude" TYPE NUMERIC`);
    }

}
