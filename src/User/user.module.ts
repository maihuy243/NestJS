/* eslint-disable prettier/prettier */
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [UserController],
})
export class UserModule {}
