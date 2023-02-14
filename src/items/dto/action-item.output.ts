import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Item } from './item.output';

@ObjectType()
export class ActionItem extends Item {
  @Field(() => ID, { description: '경매장 ID' })
  auctionNo: number;

  @Field(() => String, { description: '등록일' })
  regDate: string;

  @Field(() => String, { description: '만료일' })
  expireDate: string;

  // @Field(() => String, { description: '아이템 고유 id' })
  // itemId: string;

  // @Field(() => String, { description: '아이템 이름' })
  // itemName: string;

  // @Field(() => Int, { description: '사용가능 레벨' })
  // itemAvailableLevel: number;

  // @Field(() => String, { description: '아이템 등급' })
  // itemRarity: string;

  // @Field(() => String, { description: '아이템 타입' })
  // itemType: string;

  // @Field(() => String, { description: '아이템 타입 상세' })
  // itemTypeDetail: string;

  @Field(() => Int, { description: '아이템 refine' })
  refine: number;

  @Field(() => Int, { description: '아이템 강화수치' })
  reinforce: number;

  @Field(() => String, { description: '아이템 증폭구분', nullable: true })
  amplificationName: string;

  @Field(() => Int, { description: '아이템 명성치' })
  adventureFame: number;

  @Field(() => Int, { description: '등록 개수' })
  count: number;

  @Field(() => Int, { description: '경매장 price' })
  price: number;

  @Field(() => Int, { description: '경매장 currentPrice' })
  currentPrice: number;

  @Field(() => Int, { description: '경매장 unitPrice' })
  unitPrice: number;

  @Field(() => Int, { description: '경매장 averagePrice' })
  averagePrice: number;
}
