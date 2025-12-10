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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_provider_1 = require("./providers/bcrypt.provider");
const account_service_1 = require("../account/account.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    bcryptProvider;
    accountService;
    jwtService;
    constructor(bcryptProvider, accountService, jwtService) {
        this.bcryptProvider = bcryptProvider;
        this.accountService = accountService;
        this.jwtService = jwtService;
    }
    async login(loginDto) {
        const user = await this.accountService.getAccount(loginDto.email);
        if (!user)
            throw new common_1.NotFoundException('Email no encontrado');
        const checkPassword = await this.bcryptProvider.comparePassword(loginDto.password, user.password);
        if (!checkPassword)
            throw new common_1.BadRequestException('Password incorrecto para el email');
        const token = this.jwtService.sign({ id: user.id });
        return {
            message: 'Inicio de sesion correcto',
            token: token
        };
    }
    hashPassword(password) {
        return this.bcryptProvider.hashPassword(password);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => account_service_1.AccountService))),
    __metadata("design:paramtypes", [bcrypt_provider_1.BcryptProvider,
        account_service_1.AccountService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map