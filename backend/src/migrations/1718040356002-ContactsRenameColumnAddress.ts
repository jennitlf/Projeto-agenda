import { MigrationInterface, QueryRunner } from "typeorm";

export class ContactsRenameColumnAddress1718040356002 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "addrass" TO "address"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "address" TO "addrass"`);
    }

}
