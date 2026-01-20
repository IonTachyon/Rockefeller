import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { User } from '../user/user.entity'
import { Trade } from 'src/trade/trade.entity';

@Entity()
export class Ticker {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    symbol: string;

    @Column("varchar")
    name: string;
    
    @Column("bigint")
    timestamp: number;

    @Column("real")
    price: number;

    @Column("real")
    volume: number;

    @OneToMany(() => Trade, (trade) => trade.ticker)
    trades: Trade[];
}

