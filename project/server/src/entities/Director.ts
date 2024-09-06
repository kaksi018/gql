import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Director {
<<<<<<< HEAD
  @Field(() => Int,{description:'감독아이디'}) id: number;
  @Field(() => String,{description:'감독이름'}) name: string;
=======
  @Field(() => Int) id: number;
  @Field(() => String) name: string;
>>>>>>> ec80aa9b862e302133eb2e8a6c336d1c9f3adc73
}
