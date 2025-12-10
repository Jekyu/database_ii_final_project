import { Account } from "src/account/entities/account.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { StatusStorageEnum } from "../enum/status-storage.enum";
import { Folder } from "src/file-folder/entities/folder.entity";
import { StoragePlan } from "./storage-plans.entity";

@Entity()
export class StorageSpace{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: 'varchar',
        length: 30,
        default: StatusStorageEnum.ACTIVE
    })
    status: string

    @Column({
        type: 'bigint',
        default: 0
    })
    ocuppation: number

    @OneToOne(() => Account)
    @JoinColumn()
    account: Account

    @CreateDateColumn()
    create_at: Date

    @OneToOne(() => StoragePlan, (storage_plan) => storage_plan.storage_space)
    @JoinColumn()
    storage_plan: StoragePlan

    @OneToMany(() => Folder, (folder) => folder.storage)
    folders: Folder[]
}