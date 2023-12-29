import { Ctx, Info, Query, Resolver } from "type-graphql";
import { categorias } from "./type";
import { GraphQLContext } from "../../context";
import { PrismaSelect } from "@paljs/plugins";

@Resolver(categorias)
export class categoriasResolver {

  @Query(returns => [categorias])
  async categorias(
    @Ctx() {prisma}: GraphQLContext,
    @Info() info: any,
  ) {
    const selected = new PrismaSelect(info).value; 
    return prisma.categorias.findMany({
        ...selected 
    })
  } 
}
 
