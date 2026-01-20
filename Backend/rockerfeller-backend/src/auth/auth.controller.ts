import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth.localguard';
import { AuthService } from './auth.service';
import { AuthLoginDTO } from './auth.login.dto';
import { AuthRegisterDTO } from './auth.register.dto';
import { JwtAuthGuard } from './auth.jwtguard';

@Controller()
export class AuthController {

    constructor(private service: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req: AuthLoginDTO) {
        return this.service.login(req);
    }

  
    @UseGuards(LocalAuthGuard)
    @Post('auth/register')
    async register(@Request() req: AuthRegisterDTO) {
        return this.service.register(req);
    }
}


