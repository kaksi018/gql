import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Cut {
  @Field(() => Int, { description: '명장면 고유아이디' }) id: number;
  @Field(() => Int, { description: '영화아이디' }) filmId: number;
  @Field({ description: '명장면 사진주소' }) src: string;
}
