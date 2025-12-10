import { Module } from '@nestjs/common';
import { FileFolderController } from './file-folder.controller';
import { FileFolderService } from './file-folder.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './entities/file.entity';
import { Folder } from './entities/folder.entity';

@Module({
  controllers: [FileFolderController],
  providers: [FileFolderService],
  imports: [TypeOrmModule.forFeature([File, Folder])],
  exports: [FileFolderService]
})
export class FileFolderModule {}
