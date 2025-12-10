import { Body, ConflictException, Controller, Get, Param, ParseUUIDPipe, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { StorageService } from './storage.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { PayloadUser } from 'src/auth/interfaces/payload-user.interface';
import { UploadFileDto } from './dtos/upload-file.dto';
import { CreateFolderDto } from './dtos/create-folder.dto';

@Controller('storage')
export class StorageController {
    constructor(
        private readonly storageService: StorageService
    ){}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    @UseGuards(JwtGuard)
    public async upload(@UploadedFile() file: Express.Multer.File, @Req() req: PayloadUser, @Body() uploadFileDto: UploadFileDto){
        return this.storageService.uploadFile(file, req.payload_user.id, uploadFileDto)
    }

    @Post('folder')
    @UseGuards(JwtGuard)
    public async createFolder(@Body() createFolderDto: CreateFolderDto, @Req() req: PayloadUser){
        return this.storageService.createFolder(createFolderDto, req.payload_user.id)
    }

    @Get('/:user_id')
    @UseGuards(JwtGuard)
    public async getStorageUser(@Req() req: PayloadUser, @Param('user_id', ParseUUIDPipe) user_id: string){
        if(user_id !== req.payload_user.id) throw new ConflictException('Uste no tiene acceso a este recurso con sus credenciales')
        return this.storageService.getStorageUser(user_id) 
    }

    @Get('/folder/:folder_id')
    @UseGuards(JwtGuard)
    public async getContentFile(@Req() req: PayloadUser, @Param('folder_id') folder_id: string){
        return this.storageService.getFolderContent(folder_id, req.payload_user.id)   
    }

    @Get('/file/:file_id')
    @UseGuards(JwtGuard)
    public async getUrlFile(@Req() req: PayloadUser, @Param('file_id') file_id: string){
        return this.storageService.getUrlFile(req.payload_user.id, file_id)
    }


    @Get('/file/info/:file_id')
    @UseGuards(JwtGuard)
    public async getMetadaFile(@Req() req: PayloadUser, @Param('file_id') file_id: string){
        return this.storageService.getMetadataFile(req.payload_user.id, file_id)
    }

    @Get('')
    @UseGuards(JwtGuard)
    public async getInfoAccount(@Req() req: PayloadUser){
        return this.storageService.getInfoStorageForAccount(req.payload_user.id)
    }
}
