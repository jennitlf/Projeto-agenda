import { DataSource } from "typeorm"
import { dataSourceOptions } from "./database.module"
import { CreatContactsTable1716898805213 } from "src/migrations/1716898805213-CreatContactsTable"

export const dataSource = new DataSource(
    {
        ...dataSourceOptions,
        synchronize: false,
        migrations: [CreatContactsTable1716898805213]
    }
)