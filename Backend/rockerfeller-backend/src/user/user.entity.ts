import { Account } from 'src/account/account.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 30})
    username: string;

    @Column({ type: 'varchar', length: 45})
    password: string;

    @Column({ type: 'varchar', length: 300})
    full_name: string;

    @Column({ type: 'varchar', length: 45})
    e_mail: string;

    @OneToMany(() => Account, (account) => account.user)
    accounts: Account[];
}
    
