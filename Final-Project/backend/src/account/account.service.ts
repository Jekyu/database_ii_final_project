import { BadRequestException, forwardRef, HttpException, HttpStatus, Inject, Injectable, RequestTimeoutException } from '@nestjs/common';
import { RegisterAccountDto } from './dto/register-account.dto';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InfoAccount } from './entities/info-account.entity';
import { AuthService } from 'src/auth/auth.service';
import { StorageService } from 'src/storage/storage.service';

@Injectable()
export class AccountService {
    constructor(
        @InjectRepository(Account)
        private accountRepository: Repository<Account>,

        @InjectRepository(InfoAccount)
        private infoAccountRepository: Repository<InfoAccount>,

        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService,

        @Inject(forwardRef(() => StorageService))
        private readonly storageService: StorageService
    ) {}

    public async registerAccount(registerAccount: RegisterAccountDto) {
        const account = await this.getAccount(registerAccount.email)
        if (account) throw new HttpException('La cuenta ya existe', HttpStatus.CONFLICT)
        const newAccount = this.accountRepository.create({
            ...registerAccount,
            password: await this.authService.hashPassword(registerAccount.password)
        })
        try {
            await this.accountRepository.save(newAccount)
            const infoAccount = this.infoAccountRepository.create({
                ...registerAccount.info_account,
                account: {id: newAccount.id}
            })
            await this.infoAccountRepository.save(infoAccount)
            await this.storageService.createStorageSpace(newAccount.id)
            return {
                message: 'Cuenta creada exitosamente'
            }
        } catch (error) {
            throw new RequestTimeoutException(`${error}Error al crear la cuenta`)
        }
    }

    public async getAccount(email?: string , id?: string) {
        if (!email && !id) throw new BadRequestException('Se debe especificar id o email')
        const account = email ? await this.accountRepository.findOneBy({email})
                              : await this.accountRepository.findOneBy({id: id})
        return account
    }
}
