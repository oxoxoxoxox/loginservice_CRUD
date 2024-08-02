import { Body, Controller, Delete, Get, Patch, Query } from "@nestjs/common";
import { LoginserviceService } from './loginservice.service';
import { LoginCreateReqDto } from '../Dto/req/login.create.req.dto';
import { Repository } from 'typeorm';
import { LoginEntity } from '../Entity/login.entity';
import { LoginReadReqDto } from '../Dto/req/login.read.req.dto';
import { LoginUpdateReqDto } from "../Dto/req/login.update.req.dto";
import { LoginUpdatedataResDto } from "../Dto/res/login.updatedata.res.dto";
import { LoginDeleteReqDto } from "../Dto/req/login.delete.req.dto";

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
  @Get('read')
  async read(@Query() query: LoginReadReqDto) {
    return this.loginService.read(query);
  }
  @Patch('update')
  async update(
    @Query() query: LoginUpdateReqDto,
    @Body() updateData: LoginUpdatedataResDto,
  ) {
    return this.loginService.update(query, updateData);
  }
  @Delete('delete')
  async delete(@Query() query: LoginDeleteReqDto) {
    return this.loginService.delete(query);
  }
}
