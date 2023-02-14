import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ItemsResolver } from './items.resolver';
import { ItemsService } from './items.service';

@Module({
  providers: [ItemsResolver, ItemsService, PrismaService],
})
export class ItemsModule {}
