import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";
import { Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";
import { InsertResult } from "typeorm/browser";
import { UpdateResult } from "typeorm/browser";
import { CreateUserDTO } from "./user.dto.create";
import { log } from "console";
import { UpdateUserDTO } from "./user.dto.update";
import { ReadUserDTO } from "./user.dto.read";

@Injectable()
export class UserService {
    constructor (
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async create(user: CreateUserDTO): Promise<InsertResult> {
        var newUser = new User();   
        newUser.username = user.username;
        newUser.password = user.password;
        newUser.full_name = user.full_name;
        newUser.e_mail = user.e_mail;
        return await this.userRepository.insert(newUser);
    }

    async read(readID: number): Promise<User> {
        var user: User = await this.userRepository.findOneOrFail( {
            where: {
                id: readID
            }
        })
        return user;
    }
    
    async update(updateUserDTO: UpdateUserDTO): Promise<UpdateResult>  {
        var userInDatabase = await this.userRepository.findOneOrFail({
            where: {
                id: updateUserDTO.id
            }
        })

        userInDatabase.username = updateUserDTO.username;
        userInDatabase.e_mail = updateUserDTO.email;
        userInDatabase.password = updateUserDTO.password;
        userInDatabase.full_name = updateUserDTO.full_name;
        
        return await this.userRepository.update(userInDatabase.id, userInDatabase);
    }   
    
    async delete(deletedUserID: number): Promise<DeleteResult> {
        return await this.userRepository.delete(deletedUserID);
    }

    async findUserByEmail(e_mail: string): Promise<User | null> {
        return this.userRepository.findOne({
            where: {
                e_mail: e_mail
            }
        })
    }
}