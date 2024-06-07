import { DataSource } from "typeorm"
import { dataSourceOptions } from "./database.module"
import { CreatContactsTable1716898805213} from "src/migrations/1716898805213-CreatContactsTable"
import { ContactsTableWithAddrass1717784864584 } from "src/migrations/1717784864584-ContactsTableWithAddrass"
import { ContactsTableWithlat1717793082593 } from "src/migrations/1717793082593-ContactsTableWithlat"
import { ContactsTableWithlong1717793092098 } from "src/migrations/1717793092098-ContactsTableWithlong"

export const dataSource = new DataSource(
    {
        ...dataSourceOptions,
        synchronize: false,
        migrations: [CreatContactsTable1716898805213, ContactsTableWithAddrass1717784864584, ContactsTableWithlat1717793082593, ContactsTableWithlong1717793092098]
    }
)