import { NonEmptyArray } from "type-graphql";
import { categoriasResolver } from "./schemas/categorias/resolvers";
import { tiposHierbaResolver } from "./schemas/tipos-hierba/resolvers";

export const resolvers: NonEmptyArray<Function> = [
    categoriasResolver,
    tiposHierbaResolver
  
]