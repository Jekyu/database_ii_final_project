import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAccountDto } from './dto/register-account.dto';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {

    constructor(
        private readonly accountService: AccountService
    ){}

    @Post('register')
    public registerAccount(@Body() registerAccount: RegisterAccountDto) {
        return this.accountService.registerAccount(registerAccount);
    }

}
