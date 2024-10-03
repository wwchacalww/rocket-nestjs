import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CreateAccountController} from './controllers/create-account.controller'
import { PrismaService } from './prisma/prisma.service'
import { envSchema } from 'env'

@Module({
  imports: [ConfigModule.forRoot({
    validate: (env) => envSchema.parse(env),
    isGlobal: true,
  })],
  controllers: [CreateAccountController],
  providers: [PrismaService],
})
export class AppModule {}
