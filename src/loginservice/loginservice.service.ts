import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginEntity } from '../Entity/login.entity';
import { Repository } from 'typeorm';
import { LoginCreateReqDto } from '../Dto/req/login.create.req.dto';
import { LoginReadReqDto } from '../Dto/req/login.read.req.dto';

@Injectable()
export class LoginserviceService {
  constructor(
    @InjectRepository(LoginEntity)
    private readonly loginEntity: Repository<LoginEntity>,
  ) {}

  getall() {
    return this.loginEntity;
  }

  async create(query: LoginCreateReqDto) {
    const data: LoginEntity = new LoginEntity();
    data.userName = query.userName;
    data.userID = query.userID;
    data.userPW = query.userPW;

    const result: LoginEntity = await this.loginEntity.save(data);
    console.log(result);
    return '축하합니다! 회원가입이 되었습니다.';
  }

  async read(query: LoginReadReqDto) {
    const data: LoginEntity = await this.loginEntity.findOne({
      select: {
        // 빼낼거
        userName: true,
        userID: true,
        userPW: true,
      },
      where: {
        userName: query.userName,
      },
    });
    if (!data) throw new NotFoundException('옳지 않는 회원 정보입니다.');
    console.log(data);
    return data;
  }
}
