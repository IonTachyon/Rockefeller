import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ticker } from "./ticker.entity";
import { TickerService } from "./ticker.service";
import { TickerController } from "./ticker.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Ticker])],
    providers: [TickerService],
    controllers: [TickerController],
})
export class TickerModule { }
