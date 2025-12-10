import { RegisterAccountDto } from './dto/register-account.dto';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity';
import { InfoAccount } from './entities/info-account.entity';
import { AuthService } from 'src/auth/auth.service';
import { StorageService } from 'src/storage/storage.service';
export declare class AccountService {
    private accountRepository;
    private infoAccountRepository;
    private readonly authService;
    private readonly storageService;
    constructor(accountRepository: Repository<Account>, infoAccountRepository: Repository<InfoAccount>, authService: AuthService, storageService: StorageService);
    registerAccount(registerAccount: RegisterAccountDto): Promise<{
        message: string;
    }>;
    getAccount(email?: string, id?: string): Promise<Account | null>;
}
