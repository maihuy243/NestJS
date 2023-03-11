/* eslint-disable prettier/prettier */

import { UserRepository } from './user.repository';
import { UserDTO } from './../Dto/user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private userRepo: UserRepository) {}

  createUser(user: UserDTO): UserDTO {
    return UserDTO.PlainToClassModal(user);
  }
}
