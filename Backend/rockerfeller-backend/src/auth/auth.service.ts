
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthRegisterDTO } from './auth.register.dto';
import { User } from 'src/user/user.entity';
import { AuthLoginDTO } from './auth.login.dto';
import { ValidationResponse } from './auth.validationresponse';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(e_mail: string, password: string): Promise<ValidationResponse | null> {
    const user = await this.userService.findUserByEmail(e_mail);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: AuthLoginDTO): Promise<string | null> {
    var validationResult = await this.validateUser(user.e_mail, user.password);
    if (validationResult !== null) {
      const payload = { email: user.e_mail, sub: validationResult.id};
      return this.jwtService.sign(payload)
    }
    return "Login failed.";
  } 

  async register(registerDTO: AuthRegisterDTO): Promise<string | null> {
    const email_in_use: User | null = await this.userService.findUserByEmail(registerDTO.e_mail);
    if (email_in_use) {
      return "Registration failed.";
    }
    else 
    {
      await this.userService.create(registerDTO);
      return "Successfully registered user!";
    }
  }
}
