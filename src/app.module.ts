import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginserviceModule } from './loginservice/loginservice.module';
import { LoginEntity } from './Entity/login.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    LoginserviceModule,
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'loginservice',
      entities: [LoginEntity], //전체
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [TypeOrmModule],
})
export class AppModule {}
