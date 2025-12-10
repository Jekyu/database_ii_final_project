import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { File } from "./file.entity";
import { StorageSpace } from "src/storage/entities/storage-space.entity";

@Entity()
export class Folder{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: 'varchar',
        length: 40,
        nullable: false
    })
    name: string

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date

    @DeleteDateColumn()
    delete_at: Date

    @ManyToOne(() => Folder, (folder) => folder.child)
    @JoinColumn()
    parent: Folder 


    @OneToMany(() => Folder, (folder) => folder.parent)
    child: Folder[]

    @ManyToOne(() => StorageSpace, (storage) => storage.folders)
    @JoinColumn()
    storage: StorageSpace

    @Column({
        type: 'boolean',
        default: false
    })
    hide: Boolean

    @OneToMany(() => File, (file) => file.folder)
    files: File[]
}