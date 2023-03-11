/* eslint-disable prettier/prettier */
import { UserDTO } from './../Dto/user.dto';
import { Body, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller('user')
export class UserController {
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
    return {
      userName: 'test',
      password: 'test',
    };
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log('id', id);

    return 'user';
  }
}
