import { BadRequestException, forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { BcryptProvider } from './providers/bcrypt.provider';
import { AccountService } from 'src/account/account.service';
import { JwtService } from '@nestjs/jwt';
import { AccountModule } from 'src/account/account.module';

@Injectable()
export class AuthService {
    constructor(
        private readonly bcryptProvider: BcryptProvider,
        @Inject(forwardRef(() => AccountService))
        private readonly accountService: AccountService,
        private readonly jwtService: JwtService
    ){}


    public async login(loginDto: LoginDto){
        const user = await this.accountService.getAccount(loginDto.email)
        if (!user) throw new NotFoundException('Email no encontrado')
        
        const checkPassword = await this.bcryptProvider.comparePassword(loginDto.password, user.password)
        if(!checkPassword) throw new BadRequestException('Password incorrecto para el email')

        const token = this.jwtService.sign({id: user.id})
        return {
            message: 'Inicio de sesion correcto',
            token: token
        }
    }


    public hashPassword(password: string){
        return this.bcryptProvider.hashPassword(password)
    }
}
