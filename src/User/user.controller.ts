/* eslint-disable prettier/prettier */
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserDTO } from './../Dto/user.dto';
import { Body, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userServices: UserService) {
    this.userServices = new UserService(UserRepository);
  }

  @Get()
  getAllUsers() {
    return {
      data: [
        {
          id: 1,
          user: 'Huy',
        },
        {
          id: 2,
          user: 'Tuy',
        },
      ],
    };
  }

  // Post
  @Post()
  createUser(@Body() user: UserDTO): UserDTO {
    return this.userServices.createUser(user);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return id;
  }
}
