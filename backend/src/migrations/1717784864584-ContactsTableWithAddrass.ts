import { MigrationInterface, QueryRunner} from "typeorm";

export class ContactsTableWithAddrass1717784864584 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "addrass" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "addrass"`);
    }

}
