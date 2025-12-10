import { RegisterAccountDto } from './dto/register-account.dto';
import { AccountService } from './account.service';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    registerAccount(registerAccount: RegisterAccountDto): Promise<{
        message: string;
    }>;
}
