import { BadRequestException, CanActivate, ConflictException, ExecutionContext, forwardRef, Inject, Injectable, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { PayloadUser } from "../interfaces/payload-user.interface";
import { AccountService } from "src/account/account.service";
import { StatusAccount } from "src/account/enums/status-account.enum";

@Injectable()
export class JwtGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        @Inject(forwardRef(() => AccountService))
        private readonly accountService: AccountService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const token = this.extractToken(request)

        if (!token) throw new BadRequestException('No cuenta con credenciales para acceder')
        try {
            const payload = await this.jwtService.verifyAsync(token, { secret: this.configService.get('JWT_SECRET') })
            const account = await this.accountService.getAccount(undefined, payload?.id)
            if (!account) throw new NotFoundException('La cuenta no existe')
            if (account.status !== StatusAccount.ACTIVE) throw new ConflictException('Su cuenta no esta activa')
            request['payload_user'] = {id: payload?.id} as Partial<PayloadUser>
        } catch (error) {
            throw new BadRequestException(`Acceso denegago al recurso`)
        }
        return true
    }

    private extractToken(request: Request) {
        const authHeader = request.headers['authorization']
        const [type, token] = authHeader?.split(' ') ?? []
        return type == 'Bearer' ? token : false
    }

}