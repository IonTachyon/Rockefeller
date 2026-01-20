import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { InsertResult } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';
import { DeleteResult } from 'typeorm/browser';
import { AccountService } from './account.service';
import { CreateAccountDTO } from './account.dto.create';
import { ReadAccountDTO } from './account.dto.read';
import { UpdateAccountDTO } from './account.dto.update';

@Controller('account')
export class AccountController {

    constructor(private readonly accountService: AccountService) {}

    @Post()
    async create(@Body() createAccountDTO: CreateAccountDTO): Promise<string> {
        await this.accountService.create(createAccountDTO);
        return "Account successfully created!";
    }

    @Get(':id')
    async read(@Param('id') id: number): Promise<ReadAccountDTO> {
        return this.accountService.read(id);
    }

    @Get('readAll/:id')
    async readAll(@Param('id') id: number): Promise<ReadAccountDTO> {
        return this.accountService.read(id);
    }
    
    @Put(':id')
    async update(@Body() updateAccountDTO: UpdateAccountDTO): Promise<string> {
        await this.accountService.update(updateAccountDTO);
        return "Successfully updated account!";
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<string> {
        await this.accountService.delete(id);
        return "Successfully deleted account!";
    }
}
