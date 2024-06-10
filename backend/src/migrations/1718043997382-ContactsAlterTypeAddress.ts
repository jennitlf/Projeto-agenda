import { MigrationInterface, QueryRunner } from "typeorm";

export class ContactsAlterTypeAddress1718043997382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "address" TYPE VARCHAR(80)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "address" TYPE INTEGER`);
    }

}
