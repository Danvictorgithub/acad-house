import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createUserDto: CreateUserDto) {
    const userExist = await this.prisma.user.findUnique({ where: { email: createUserDto.email.toLowerCase() } });
    if (userExist) {
      throw new BadRequestException("User Already Exist");
    }
    const password = await bcrypt.hash(createUserDto.password, parseInt(process.env.SECRET_KEY || '7'));
    return this.prisma.user.create({ data: { email: createUserDto.email.toLowerCase(), password } });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
