import { Controller, Get, Query } from '@nestjs/common';
import { LoginserviceService } from './loginservice.service';
import { LoginCreateReqDto } from '../Dto/req/login.create.req.dto';
import { Repository } from 'typeorm';
import { LoginEntity } from '../Entity/login.entity';

@Controller('loginservice')
export class LoginserviceController {
  constructor(private readonly loginService: LoginserviceService) {}

  @Get()
  getHello(): Repository<LoginEntity> {
    return this.loginService.getall();
  }

  @Get('create')
  async create(@Query() query: LoginCreateReqDto) {
    return this.loginService.create(query);
  }
}
