import { MigrationInterface, QueryRunner } from "typeorm";

export class ContactsColunlongLatData1718019985774 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "longitude" TYPE VARCHAR(20)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "longitude" TYPE NUMERIC`);
    }

}
