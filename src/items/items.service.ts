import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { axiosInstance } from 'src/utils/axios';
import { Item } from './dto/item.output';
import { SearchInput } from './dto/search.dto';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  findOne(id: string) {
    return this.prisma.item.findUnique({
      where: {
        itemId: id,
      },
    });
  }

  async findAllByKeyword(searchInput: SearchInput) {
    try {
      const { data } = await axiosInstance.get<{ rows: Item[] }>('/items', {
        params: {
          ...searchInput,
          limit: 30,
          wordType: 'full',
        },
      });

      const promises = data.rows.map(async (item) => {
        const dbItem = await this.prisma.item.findUnique({
          where: { itemId: item.itemId },
        });
        if (!!dbItem) return;
        const { data } = await axiosInstance.get<{ rows: Array<unknown> }>(
          '/auction-sold',
          {
            params: {
              itemId: item.itemId,
            },
          },
        );

        if (data.rows.length === 0)
          throw new NotFoundException('item not found in auction');

        this.prisma.item.create({
          data: item,
        });
        return item;
      });

      return (await Promise.allSettled(promises))
        .filter(({ status }) => status === 'fulfilled')
        .map(({ value }: PromiseFulfilledResult<Item>) => value);
    } catch (error) {
      console.log(error.response); // TODO: 에러처리
    }
  }
}
