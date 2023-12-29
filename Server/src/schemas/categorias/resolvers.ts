import { Arg, Ctx, Info, Query, Resolver, Mutation } from "type-graphql";
import { EditarCategorias, EntradaCategorias, categorias, whereCategorias } from "./type";
import { GraphQLContext } from "../../context";
import { PrismaSelect } from "@paljs/plugins";

@Resolver(categorias)
export class categoriasResolver {

  @Query(returns => [categorias])
  categorias(
    @Ctx() {prisma}: GraphQLContext,
    @Info() info: any,
    @Arg("where",{nullable:true}) where: whereCategorias,
  ) {
    const selected = new PrismaSelect(info).value; 
    return prisma.categorias.findMany({
        ...selected,
        where:{
          nombre: where?.nombre ?{
            contains:where.nombre,
            mode:"insensitive"
          }: {},
        }
    })
  } 

  @Query(returns => [categorias])
  categoriasByID(
    @Ctx() {prisma}: GraphQLContext,
    @Arg("id",{nullable:false}) id: string,
    @Info() info: any,
  ) {
    const selected = new PrismaSelect(info).value; 
    return prisma.categorias.findUnique({
        where:{
            id
        },
        ...selected 
    })
  } 

  @Mutation(returns => categorias) 
  AddCategoria( 
    @Ctx() {prisma}: GraphQLContext,
    @Arg("EntradaCategorias") InputCategorias: EntradaCategorias,
    @Info() info: any,
    
  )  {
    const selected = new PrismaSelect(info).value;
    return prisma.categorias.create({
        ...selected,

        data: InputCategorias
    })
  }

  @Mutation(returns => categorias) 
  EditarCategorias( 
   @Ctx() {prisma}: GraphQLContext,
   @Arg("id") id: string,
   @Arg("EditarCategorias") InputCategorias: EditarCategorias,
   @Info() info: any
 )  {  
   return prisma.categorias.update({
       where:{
           id
       },
       data: InputCategorias
        
   })
 }

 @Mutation(returns => categorias) 
  EliminarCategoria( 
    @Ctx() {prisma}: GraphQLContext,
    @Arg("id") id: string,
    @Info() info: any
  )  {  
    return prisma.categorias.delete({
        where:{
            id
        }
    })
  }

}
 
