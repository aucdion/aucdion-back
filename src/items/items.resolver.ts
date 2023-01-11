import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { Item } from './dto/item.output';
@Resolver(() => Item)
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Query(() => Item, { name: 'item' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.itemsService.findOne(id);
  }

  @Query(() => [Item], { name: 'search' })
  findAllByKeyword(@Args('keyword', { type: () => String }) keyword: string) {
    return this.itemsService.findAllByKeyword(keyword);
  }
}
