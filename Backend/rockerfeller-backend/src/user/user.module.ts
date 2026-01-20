import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "src/auth/auth.jwtguard";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService, 
    {
        provide: APP_GUARD,
        useClass: JwtAuthGuard,
    },],
    controllers: [UserController],
})
export class UserModule { }
