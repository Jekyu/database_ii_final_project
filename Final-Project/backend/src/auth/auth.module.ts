import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BcryptProvider } from './providers/bcrypt.provider';
import { AccountModule } from 'src/account/account.module';
import { JwtGuard } from './guards/jwt.guard';


@Module({
  controllers: [AuthController],
  providers: [AuthService, BcryptProvider, JwtGuard],
  exports: [AuthService, BcryptProvider, JwtGuard, JwtModule],
  imports: [ConfigModule, forwardRef(() => AccountModule),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        global: true,
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: Number(configService.get('JWT_EXPIRE_IN'))
        }
      })
    })
  ]
})
export class AuthModule {}
