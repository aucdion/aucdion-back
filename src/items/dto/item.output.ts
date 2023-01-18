import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Item {
  @Field(() => String, { description: '아이템 고유 id' })
  itemId: string;

  @Field(() => String, { description: '아이템 이름' })
  itemName: string;

  @Field(() => Int, { description: '사용가능 레벨' })
  itemAvailableLevel: number;

  @Field(() => String, { description: '아이템 등급' })
  itemRarity: string;

  @Field(() => String, { description: '아이템 타입' })
  itemType: string;

  @Field(() => String, { description: '아이템 타입 상세' })
  itemTypeDetail: string;
}
