"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const account_service_1 = require("../../account/account.service");
const status_account_enum_1 = require("../../account/enums/status-account.enum");
let JwtGuard = class JwtGuard {
    jwtService;
    configService;
    accountService;
    constructor(jwtService, configService, accountService) {
        this.jwtService = jwtService;
        this.configService = configService;
        this.accountService = accountService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractToken(request);
        if (!token)
            throw new common_1.BadRequestException('No cuenta con credenciales para acceder');
        try {
            const payload = await this.jwtService.verifyAsync(token, { secret: this.configService.get('JWT_SECRET') });
            const account = await this.accountService.getAccount(undefined, payload?.id);
            if (!account)
                throw new common_1.NotFoundException('La cuenta no existe');
            if (account.status !== status_account_enum_1.StatusAccount.ACTIVE)
                throw new common_1.ConflictException('Su cuenta no esta activa');
            request['payload_user'] = { id: payload?.id };
        }
        catch (error) {
            throw new common_1.BadRequestException(`Acceso denegago al recurso`);
        }
        return true;
    }
    extractToken(request) {
        const authHeader = request.headers['authorization'];
        const [type, token] = authHeader?.split(' ') ?? [];
        return type == 'Bearer' ? token : false;
    }
};
exports.JwtGuard = JwtGuard;
exports.JwtGuard = JwtGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => account_service_1.AccountService))),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService,
        account_service_1.AccountService])
], JwtGuard);
//# sourceMappingURL=jwt.guard.js.map