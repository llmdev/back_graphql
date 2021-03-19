import { Field, ObjectType, Query, Resolver } from "type-graphql";
import { Users } from "../entities/Users";

@ObjectType()
class User {
  @Field()
  id: String;

  @Field()
  name: String;

  @Field()
  email: String;

  @Field()
  password: String;
}

@Resolver()
export class UserResolver {
  @Query(() => User)
  user() {
    return {
      id: 10,
      name: "Lucas Moura",
      email: "lucasmoura.dev@gmail.com",
      password: "minha senha",
    };
  }
}
