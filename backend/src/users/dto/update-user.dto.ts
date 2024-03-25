import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, Length } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @Length(4, 20)
    email: string
    @IsOptional()
    @Length(6)
    password: string
}
