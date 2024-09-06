import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Director {
  @Field(() => Int,{description:'감독아이디'}) id: number;
  @Field(() => String,{description:'감독이름'}) name: string;
}
