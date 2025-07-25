import { Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateKeyValueDto } from './dto/create-key-value.dto';
import { UpdateKeyValueDto } from './dto/update-key-value.dto';

@Injectable()
export class KeyValueService {
  constructor(readonly prisma: PrismaService) {}

  async create(createKeyValueDto: CreateKeyValueDto) {
    const { key, value } = createKeyValueDto;

    if (!key || !value) {
      throw new Error('Key and value must be provided');
    }

    try {
      return await this.prisma.keyValue.create({
        data: createKeyValueDto,
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new Error(`Key "${key}" already exists`);
        }
      }
      throw error;
    }
  }

  async findOne(key: string) {
    if (!key) {
      throw new Error('Key must be provided');
    }

    try {
      return await this.prisma.keyValue.findUnique({
        where: { key },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new Error(`Key "${key}" not found`);
        }
      }
      throw error;
    }
  }

  async update(updateKeyValueDto: UpdateKeyValueDto) {
    const { key, value } = updateKeyValueDto;

    if (!key || !value) {
      throw new Error('Key and value must be provided for update');
    }

    try {
      return await this.prisma.keyValue.update({
        where: { key },
        data: updateKeyValueDto,
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new Error(`Key "${key}" not found for update`);
        }
      }

      throw error;
    }
  }

  async remove(key: string) {
    try {
      return await this.prisma.keyValue.delete({
        where: { key },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new Error(`Key "${key}" not found for deletion`);
        }
      }
      throw error;
    }
  }
}
