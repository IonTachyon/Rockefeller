import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Account } from "./account.entity";
import { Repository } from "typeorm";
import { InsertResult, UpdateResult, DeleteResult } from "typeorm/browser";
import { CreateAccountDTO } from "./account.dto.create";
import { ReadAccountDTO } from "./account.dto.read";
import { UpdateAccountDTO } from "./account.dto.update";
import { User } from "src/user/user.entity";
import { UserService } from "src/user/user.service";
import { userInfo } from "os";


@Injectable()
export class AccountService {
    constructor (
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,
    ) {}

    async create(newAccountDTO: CreateAccountDTO): Promise<Account> {
        var newAccount = new Account();
        
        newAccount.name = newAccountDTO.name;
        newAccount.description = newAccountDTO.description;
        newAccount.balance = newAccountDTO.initial_balance;
        newAccount.user = new User();
        newAccount.user.id = newAccountDTO.userId;

        return await this.accountRepository.save(newAccount);
    }

    async read(readID: number): Promise<ReadAccountDTO> {
        var account: Account = await this.accountRepository.findOneOrFail({
           where: {
               id: readID
           } 
        });

        var readAccDTO : ReadAccountDTO = new ReadAccountDTO();
        readAccDTO.id = account.id;
        readAccDTO.name = account.name;
        readAccDTO.balance = account.balance;
        readAccDTO.description = account.description;
        readAccDTO.userId = account.user.id;
        return readAccDTO;
    }
    
    async readAll(userID: number): Promise<ReadAccountDTO[]> {
        var accounts: Account[] = await this.accountRepository.find({
           where: {
               user: {
                    id: userID
               }
           } 
        });

        var readAccDTOs : ReadAccountDTO[] = [];

        readAccDTOs = accounts.map(account => {
            var readAccDTO : ReadAccountDTO = new ReadAccountDTO();
            readAccDTO.id = account.id;
            readAccDTO.name = account.name;
            readAccDTO.balance = account.balance;
            readAccDTO.description = account.description;
            readAccDTO.userId = account.user.id;
            return readAccDTO;
        })

        return readAccDTOs;
    }
        
    async update(updateAccountDTO: UpdateAccountDTO): Promise<UpdateResult>  {
        var accountInDatabase = await this.accountRepository.findOneOrFail({
            where: {
                id: updateAccountDTO.id
            }
        })

        accountInDatabase.name = updateAccountDTO.name;
        accountInDatabase.description = updateAccountDTO.description;
        accountInDatabase.balance = updateAccountDTO.balance;

        return await this.accountRepository.update(accountInDatabase.id, accountInDatabase);
    }   
    
    async delete(deletedUserID: number): Promise<DeleteResult> {
        return await this.accountRepository.delete(deletedUserID);
    }
}