import { LoginDto } from './dtos/login.dto';
import { BcryptProvider } from './providers/bcrypt.provider';
import { AccountService } from 'src/account/account.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly bcryptProvider;
    private readonly accountService;
    private readonly jwtService;
    constructor(bcryptProvider: BcryptProvider, accountService: AccountService, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        message: string;
        token: string;
    }>;
    hashPassword(password: string): Promise<string>;
}
