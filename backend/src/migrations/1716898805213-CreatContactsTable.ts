import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatContactsTable1716898805213 implements MigrationInterface {
                 // criacao da tabela
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"') // Criar uma extensão se ela não existir, uuid-ossp é extensão do postgre para habilidar o uuid (identificador)
        await queryRunner.createTable(new Table({
            name: 'contacts',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'type',
                    type: 'varchar',
                },
                {
                    name: 'number',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ]
        }))
    }
                 //remocao da tabela
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('contacts')
    }

}
