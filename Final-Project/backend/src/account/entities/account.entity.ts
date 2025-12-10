import { Column, CreateDateColumn, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import { InfoAccount } from "./info-account.entity";
import { StatusAccount } from "../enums/status-account.enum";

@Entity()
export class Account{
    @PrimaryGeneratedColumn('uuid')
    id : string;

    @Column({
        type: 'varchar',
        unique: true,
        length: 50,
        nullable: false,
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false
    })
    password: string;

    @Column({
        type: 'varchar',
        length: 10,
        default: StatusAccount.ACTIVE
    })
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToOne(() => InfoAccount)
    info_account: InfoAccount;
}