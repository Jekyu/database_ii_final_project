import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.entity";

@Entity()
export class InfoAccount{
    @PrimaryGeneratedColumn()
    id: string

    @OneToOne(() => Account, (account) => account.info_account)
    @JoinColumn({
        name: 'account_id',
        referencedColumnName: 'id'
    })
    account: Account;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    first_name: string;

    @Column({
        type: 'varchar',
        length: 50,
        nullable: false
    })
    last_name: string;

    @Column({
        type: 'varchar',
        length: 10,
        nullable: true
    })
    phone: string;
}