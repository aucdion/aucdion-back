import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class SearchInput {
  @Field(() => String, { description: '아이템 이름' })
  itemName: string;
}
