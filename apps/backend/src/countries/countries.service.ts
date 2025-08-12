import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CountriesService {
  constructor(readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.country.findMany();
  }

  async findByCode(cc: string) {
    return this.prisma.country.findUnique({
      where: { cc: cc },
    });
  }
}
