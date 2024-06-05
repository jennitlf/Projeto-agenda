import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from 'src/features/contacts/entities/contacts.entity';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'postgres',
    entities: [Contact],
    synchronize: false,
}

@Module({ 
    imports: [TypeOrmModule.forRootAsync({
        useFactory: async () => {
            return {...dataSourceOptions,}
        }
    })],
})

export class DatabaseModule {}
