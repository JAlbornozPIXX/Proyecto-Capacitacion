import { Arg, Ctx, Info, Mutation, Query,Resolver } from "type-graphql";
import { GraphQLContext } from "../../context";
import { EditarHierbas, EntradaHierbas, tipos_hierba, whereTipoHierba } from "./type";
import { PrismaSelect } from "@paljs/plugins";

@Resolver(tipos_hierba)
export class tiposHierbaResolver {

  @Query(returns => [tipos_hierba])
  async tipos_hierba(
    @Ctx() {prisma}: GraphQLContext,
    @Info() info: any,
    @Arg("where",{nullable:true}) where: whereTipoHierba,
  ) {
    const selected = new PrismaSelect(info).value; 
    return prisma.tipos_hierba.findMany({
        ...selected ,
        where:{
            nombre: where?.nombre ? {
                contains:where.nombre,
                mode:"insensitive"
            }: {},
            cantidad:where?.cantidad
        }
    })
  } 

  @Query(returns => tipos_hierba)
  async tiposHierbaByID(
    @Ctx() {prisma}: GraphQLContext,
    @Arg("id",{nullable:false}) id: string,
    @Info() info: any,
  ) {
    const selected = new PrismaSelect(info).value; 
    return prisma.tipos_hierba.findUnique({
        where:{
            id
        },
        ...selected 
    })
  } 

  @Mutation(returns => tipos_hierba) 
  AddHierba( 
    @Ctx() {prisma}: GraphQLContext,
    @Arg("EntradaHierbas") InputHierbas: EntradaHierbas,
    @Info() info: any,
    
  )  {
    const selected = new PrismaSelect(info).value;
    return prisma.tipos_hierba.create({
        ...selected,

        data: InputHierbas
    })
  }

  @Mutation(returns => tipos_hierba) 
   EditarHierba( 
    @Ctx() {prisma}: GraphQLContext,
    @Arg("id") id: string,
    @Arg("EntradaHierbas") InputHierbas: EditarHierbas,
    @Info() info: any
  )  {  
    return prisma.tipos_hierba.update({
        where:{
            id
        },
        data: InputHierbas
         
    })
  }

  @Mutation(returns => tipos_hierba) 
  EliminarHierba( 
    @Ctx() {prisma}: GraphQLContext,
    @Arg("id") id: string,
    @Info() info: any
  )  {  
    return prisma.tipos_hierba.delete({
        where:{
            id
        }
    })
  }
}
