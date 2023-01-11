import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import mockItems from 'src/items/mock/item';
// import got from 'got';
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

  findAllByKeyword(keyword: string) {
    // console.log(mockItems);

    // const { data } = await got
    //   .post('https://httpbin.org/anything', {
    //     json: {
    //       hello: 'world',
    //     },
    //   })
    //   .json();

    // console.log(data);
    // neople API call
    return mockItems;
  }
}
