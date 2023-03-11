/* eslint-disable prettier/prettier */

import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { BaseDTO } from './base.dto';

export class UserDTO extends BaseDTO {
  @Expose()
  @IsNotEmpty({ message: 'us Khong duoc de trong' })
  userName: number;

  @Expose()
  @IsString({ message: '1 chuoi string' })
  @IsNotEmpty({ message: 'pw Khong duoc de trong' })
  passWord: string;
}
