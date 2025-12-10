import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { StorageSpace } from "./storage-space.entity";

@Entity()
export class StoragePlan{
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'varchar',
        length: 30,
        nullable: false
    })
    name_plan: string

    @Column({
        type: 'bigint',
        nullable: false
    })
    storage_capacity: number

    @Column({
        type: 'float',
        nullable: false
    })
    monthly_price: number

    @OneToOne(() => StorageSpace, (storage_space) => storage_space.storage_plan)
    storage_space: StorageSpace
}