import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptProvider {
    public async hashPassword(password: string){
        const salt = await bcrypt.genSalt()
        return bcrypt.hash(password, salt)
    }

    public comparePassword(password: string, password_save: string){
        return bcrypt.compare(password, password_save)
    }
}