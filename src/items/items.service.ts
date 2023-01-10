import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  create(createItemInput: CreateItemInput) {
    return 'This action adds a new item';
  }

  findAll() {
    return this.prisma.item.findMany();
  }

  findOne(id: string) {
    return this.prisma.item.findUnique({
      where: {
        itemId: id,
      },
    });
  }

  update(id: string, updateItemInput: UpdateItemInput) {
    return `This action updates a #${id} item`;
  }

  remove(id: string) {
    return `This action removes a #${id} item`;
  }
}
