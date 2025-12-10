import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Folder } from "./folder.entity";

@Entity()
export class File{
    @PrimaryColumn({
        type: 'varchar',
        length: 100
    })
    id: string

    @Column({
        type: 'varchar',
        nullable: false,
        length: 50
    })
    name: string

    @CreateDateColumn()
    upload_at: Date

    @DeleteDateColumn()
    delete_at: Date 

    @Column({
        type: 'date',
        nullable: true
    })
    download_last_at?: Date

    @Column({
        type: 'integer',
        nullable: true
    })
    download_counter?: number

    @ManyToOne(() => Folder, (folder) => folder.files)
    @JoinColumn()
    folder: Folder

    @Column({
        type: 'bigint',
        nullable: false
    })
    size: number
}