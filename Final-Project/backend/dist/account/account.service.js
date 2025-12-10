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
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const account_entity_1 = require("./entities/account.entity");
const typeorm_2 = require("@nestjs/typeorm");
const info_account_entity_1 = require("./entities/info-account.entity");
const auth_service_1 = require("../auth/auth.service");
const storage_service_1 = require("../storage/storage.service");
let AccountService = class AccountService {
    accountRepository;
    infoAccountRepository;
    authService;
    storageService;
    constructor(accountRepository, infoAccountRepository, authService, storageService) {
        this.accountRepository = accountRepository;
        this.infoAccountRepository = infoAccountRepository;
        this.authService = authService;
        this.storageService = storageService;
    }
    async registerAccount(registerAccount) {
        const account = await this.getAccount(registerAccount.email);
        if (account)
            throw new common_1.HttpException('La cuenta ya existe', common_1.HttpStatus.CONFLICT);
        const newAccount = this.accountRepository.create({
            ...registerAccount,
            password: await this.authService.hashPassword(registerAccount.password)
        });
        try {
            await this.accountRepository.save(newAccount);
            const infoAccount = this.infoAccountRepository.create({
                ...registerAccount.info_account,
                account: { id: newAccount.id }
            });
            await this.infoAccountRepository.save(infoAccount);
            await this.storageService.createStorageSpace(newAccount.id);
            return {
                message: 'Cuenta creada exitosamente'
            };
        }
        catch (error) {
            throw new common_1.RequestTimeoutException(`Error al crear la cuenta`);
        }
    }
    async getAccount(email, id) {
        if (!email && !id)
            throw new common_1.BadRequestException('Se debe especificar id o email');
        const account = email ? await this.accountRepository.findOneBy({ email })
            : await this.accountRepository.findOneBy({ id: id });
        return account;
    }
};
exports.AccountService = AccountService;
exports.AccountService = AccountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(account_entity_1.Account)),
    __param(1, (0, typeorm_2.InjectRepository)(info_account_entity_1.InfoAccount)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_service_1.AuthService))),
    __param(3, (0, common_1.Inject)((0, common_1.forwardRef)(() => storage_service_1.StorageService))),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        auth_service_1.AuthService,
        storage_service_1.StorageService])
], AccountService);
//# sourceMappingURL=account.service.js.map