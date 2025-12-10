import { CanActivate, ExecutionContext } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { AccountService } from "src/account/account.service";
export declare class JwtGuard implements CanActivate {
    private readonly jwtService;
    private readonly configService;
    private readonly accountService;
    constructor(jwtService: JwtService, configService: ConfigService, accountService: AccountService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractToken;
}
