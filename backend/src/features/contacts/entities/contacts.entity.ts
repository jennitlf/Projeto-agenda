import { randomUUID } from "node:crypto"
import { timestamp } from "rxjs"
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('contacts')
export class Contact {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    type: string

    @Column()
    number: string

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date

    @BeforeInsert()
    generatedId() {
        if (this.id) { 
            return 
        }
        this.id = randomUUID()
    }
}