import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from "../../common/entities/user.entity";
import {UserController} from "../../controllers/user/user.controller";
import {UsersService} from "../../services/user/user.services";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UsersService]
})
export class UsersModule {}