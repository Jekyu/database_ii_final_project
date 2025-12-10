import { GetObjectCommand, PutObjectCommand, S3, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import {v4 as uuidv4} from 'uuid'

@Injectable()
export class AwsBucketS3 {
    private client: S3Client
    private s3_region: string
    private s3_bucket_name: string 

    constructor(
        private readonly configService: ConfigService
    ) {
        this.s3_bucket_name = this.configService.get('AWS_S3_BUCKET_NAME') ?? ''
        this.s3_region= this.configService.get('AWS_REGION') ?? ''
        const s3_config = new S3()
        this.client = new S3Client({
            region: this.s3_region,
            credentials: {
                accessKeyId: configService.get('AWS_ACCESS_KEY_ID') ?? '',
                secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY') ?? '',
            },
        })
    }

    public async getPresignedSingedUrl(key: string){
        try {
            const command = new GetObjectCommand({
                Key: key,
                Bucket: this.s3_bucket_name
            })
            const url = await getSignedUrl(this.client, command, {
                expiresIn: 600 // tiempo de expiracion en segundos
            })
            return url
        } catch (error) {
            throw new BadRequestException('error en recuperar el archivo')
        }
    }


    public async uploadFileBucket(file: Express.Multer.File){
        try {
            const key = this.generateKeyFile(file)
            const command = new PutObjectCommand({
                Bucket: this.s3_bucket_name,
                Key: key,
                Body: file.buffer,
                ContentType: file.mimetype
            })
            await this.client.send(command)
            return {
                key: key
            }
        } catch (error) {
            throw new InternalServerErrorException('No se pudo subir el archivo en el bucket')
        }

    }

    private generateKeyFile(file: Express.Multer.File){
        const file_name = file.originalname.trim()
        const timestamp = new Date().getTime().toString().trim()
        return `${file_name}-${timestamp}-${uuidv4()}`
    }



}