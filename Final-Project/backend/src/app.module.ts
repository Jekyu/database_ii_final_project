import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StorageModule } from './storage/storage.module';
import { FileFolderModule } from './file-folder/file-folder.module';
import { BucketS3Module } from './bucket-s3/bucket-s3.module';
import { MetaDataModule } from './meta-data/meta-data.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule, AccountModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_DB_URI'),
        dbName: configService.get('MONGO_DB_NAME')
      })
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: 'root',
        database: 'cloud_ud',
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    StorageModule,
    FileFolderModule,
    BucketS3Module,
    MetaDataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
