import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { User } from '../user/user.entity'
import { Trade } from 'src/trade/trade.entity';

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    name: string;

    @Column("varchar")
    description: string;

    @Column("real")
    balance: number;

    @ManyToOne(() => User, (user) => user.accounts)
    user: User;

    @OneToMany(() => Trade, (trade) => trade.account)
    trades: Trade[];
}

