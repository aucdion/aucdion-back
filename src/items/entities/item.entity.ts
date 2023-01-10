import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Item {
  @Field(() => ID, { description: '아이템 고유 id' })
  itemId: string;

  @Field(() => String, { description: '아이템 이름' })
  itemName: string;

  @Field(() => String, { description: '아이템 등급' })
  itemRarity: string;

  @Field(() => String, { description: '아이템 타입' })
  itemType: string;

  @Field(() => String, { description: '아이템 상세 타입' })
  itemTypeDetail: string;
}
