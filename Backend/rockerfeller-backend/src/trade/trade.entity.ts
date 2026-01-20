import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { User } from '../user/user.entity'
import { Account } from 'src/account/account.entity';
import { Ticker } from 'src/ticker/ticker.entity';

@Entity()
export class Trade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("real")
    price: number;

    @Column("real")
    volume: number;

    @Column("bigint")
    timestamp: number;

    @ManyToOne(() => Account, (account) => account.trades)
    account: Account;

    @ManyToOne(() => Ticker, (ticker) => ticker.trades)
    ticker: Ticker;
}

