import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateProfileDto) {
    return this.prisma.profile.create({ data });
  }

  findAll() {
    return this.prisma.profile.findMany();
  }

  findOne(id: string) {
    return this.prisma.profile.findUnique({ where: { id } });
  }

  update(id: string, data: any) {
    return this.prisma.profile.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.profile.delete({ where: { id } });
  }
}