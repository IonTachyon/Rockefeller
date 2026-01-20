import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { UserModule } from 'src/user/user.module';
import { Account } from 'src/account/account.entity';
import { Trade } from 'src/trade/trade.entity';
import { Ticker } from 'src/ticker/ticker.entity';
import { AccountModule } from 'src/account/account.module';
import { TickerModule } from 'src/ticker/ticker.module';
import { TradeModule } from 'src/trade/trade.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: 'dev.env', isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: 'rockerfeller',
      entities: [User, Account, Ticker, Trade],
      synchronize: true
    }), 
    UserModule, AccountModule, TickerModule, TradeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
