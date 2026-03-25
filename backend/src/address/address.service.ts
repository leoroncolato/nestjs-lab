import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateAddressDto) {
    return this.prisma.address.create({ data });
  }

  findAll() {
    return this.prisma.address.findMany();
  }

  findOne(id: string) {
    return this.prisma.address.findUnique({ where: { id } });
  }

  update(id: string, data: any) {
    return this.prisma.address.update({ where: { id }, data });
  }

  remove(id: string) {
    // O PDF pede para verificar se o endereço é excluído ao remover usuário (Cascade)
    // Mas esta função permite a exclusão manual do endereço isoladamente.
    return this.prisma.address.delete({ where: { id } });
  }
}