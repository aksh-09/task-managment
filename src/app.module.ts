import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
require('dotenv').config({ path: `.env` });
const host=process.env.HOST;
const port=parseInt(process.env.PORT,10);
const username=process.env.USERNAME;
const password=process.env.PASSWORD;
const db=process.env.DATABASE;
@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: host,
      port: port,
      username: username,
      password: password,
      database: db,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
