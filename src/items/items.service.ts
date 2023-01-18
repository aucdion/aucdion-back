import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { axiosInstance } from 'src/utils/axios';
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
      const { data } = await axiosInstance.get('/items', {
        params: {
          ...searchInput,
          wordType: 'full',
        },
      });

      return data.rows;
    } catch (error) {
      console.log(error.response); // TODO: 에러처리
    }
  }
}
