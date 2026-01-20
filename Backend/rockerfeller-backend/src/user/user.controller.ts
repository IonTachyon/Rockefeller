import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { CreateUserDTO } from './user.dto.create';
import { InsertResult } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';
import { DeleteResult } from 'typeorm/browser';
import { ReadUserDTO } from './user.dto.read';
import { UpdateUserDTO } from './user.dto.update';

@Controller('user')
export class UserController {

    constructor(private readonly user_service: UserService) {}

    @Post()
    async create(@Body() createUserDTO: CreateUserDTO): Promise<string> {
        await this.user_service.create(createUserDTO);
        return "Successfully created User!";
    }

    @Get(':id')
    async read(@Param('id') id: number): Promise<ReadUserDTO> {
        return await this.user_service.read(id);
    }

    @Put()
    async update(@Body() updateUserDTO: UpdateUserDTO): Promise<string> {
        this.user_service.update(updateUserDTO);
        return "Successfully updated User!";
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<string> {
        await this.user_service.delete(id);
        return "Successfully deleted User!";
    }
}
