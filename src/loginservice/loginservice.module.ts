import { Module } from '@nestjs/common';
import { LoginserviceController } from './loginservice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginEntity } from '../Entity/login.entity';
import { LoginserviceService } from './loginservice.service';

@Module({
  imports: [TypeOrmModule.forFeature([LoginEntity])],
  providers: [LoginserviceService],
  controllers: [LoginserviceController],
})
export class LoginserviceModule {}
