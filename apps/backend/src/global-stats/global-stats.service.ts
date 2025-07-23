import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGlobalStatDto } from './dto/create-global-stat.dto';
import { DeleteGlobalStatDto } from './dto/delete-global-stat.dto';
import { UpdateGlobalStatDto } from './dto/update-global-stat.dto';

@Injectable()
export class GlobalStatsService {
  constructor(readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.globalStat.findMany();
  }

  async create(createGlobalStatDto: CreateGlobalStatDto) {
    const { cc, date } = createGlobalStatDto;

    const formattedDate = new Date(date);

    try {
      return await this.prisma.globalStat.create({
        data: {
          ...createGlobalStatDto,
          date: formattedDate,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new NotFoundException(
            `GlobalStat already exists for the given criteria: cc=${cc}, date=${date.toString()}`,
          );
        }
      }
      throw error;
    }
  }

  async update(updateGlobalStatDto: UpdateGlobalStatDto) {
    const { cc, date } = updateGlobalStatDto;

    if (!cc || !date) {
      throw new NotFoundException('cc and date must be provided for update');
    }

    const formattedDate = new Date(date);

    try {
      return await this.prisma.globalStat.update({
        where: {
          ccWithDate: {
            cc,
            date: formattedDate,
          },
        },
        data: updateGlobalStatDto,
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `GlobalStat with cc=${cc} and date=${date.toString()} not found`,
          );
        }
      }
      throw error;
    }
  }

  async remove(deleteGlobalStatDto: DeleteGlobalStatDto) {
    const { cc, date } = deleteGlobalStatDto;
    const formattedDate = new Date(date);

    try {
      return await this.prisma.globalStat.delete({
        where: {
          ccWithDate: {
            cc: cc,
            date: formattedDate,
          },
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(
            `GlobalStat not found for the given criteria: cc=${cc}, date=${date.toString()}`,
          );
        }
      }
      throw error;
    }
  }
}
