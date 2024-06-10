import { DataSource } from "typeorm"
import { dataSourceOptions } from "./database.module"
import { CreatContactsTable1716898805213} from "src/migrations/1716898805213-CreatContactsTable"
import { ContactsTableWithAddrass1717784864584 } from "src/migrations/1717784864584-ContactsTableWithAddrass"
import { ContactsTableWithlat1717793082593 } from "src/migrations/1717793082593-ContactsTableWithlat"
import { ContactsTableWithlong1717793092098 } from "src/migrations/1717793092098-ContactsTableWithlong"
import { ContactsColunlongLatData1718019985774 } from "src/migrations/1718019985774-ContactsColunlongLatData"
import { ContactsColunlongLatData21718020275760 } from "src/migrations/1718020275760-ContactsColunlongLatData2"
import { ContactsRenameColumnAddress1718040356002 } from "src/migrations/1718040356002-ContactsRenameColumnAddress"
import { ContactsAlterTypeAddress1718043997382 } from "src/migrations/1718043997382-ContactsAlterTypeAddress"

export const dataSource = new DataSource(
    {
        ...dataSourceOptions,
        synchronize: false,
        migrations: [CreatContactsTable1716898805213, 
            ContactsTableWithAddrass1717784864584, 
            ContactsTableWithlat1717793082593, 
            ContactsTableWithlong1717793092098, 
            ContactsColunlongLatData1718019985774,
            ContactsColunlongLatData21718020275760,
            ContactsRenameColumnAddress1718040356002,
            ContactsAlterTypeAddress1718043997382]
    }
)