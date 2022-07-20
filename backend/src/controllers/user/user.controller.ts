import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from '../../services/user/user.services';
import { User } from '../../common/entities/user.entity';
import { CreateUserDto } from '../../common/dto/user/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(Number(id));
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }
  @Post()
  create(@Body() data: CreateUserDto) {
    return this.usersService.insert(data);
  }
}
