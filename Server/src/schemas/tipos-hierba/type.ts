
import { Field, ID, InputType, Int, ObjectType } from "type-graphql";
import { categorias } from "../categorias/type";
import { MaxLength, Min } from "class-validator";

@ObjectType()
export class tipos_hierba {
    @Field(type => ID)
    id: string;
    @Field()
    nombre: string;
    @Field()
    created_at: Date;
    @Field(type => Int)
    cantidad: number; 
    @Field(type => categorias)
    categorias: categorias  
}

@InputType()
export class EntradaHierbas{ 
    @Field()
    @MaxLength(10)
    nombre: string;
    @Field(type => Int)
    @Min(0)
    cantidad: number;
}

@InputType()
export class EditarHierbas{ 
    @Field({nullable:true})
    @MaxLength(10)
    nombre: string;
    @Field(type => Int,{nullable:true})
    @Min(0)
    cantidad: number;
}


@InputType()
export class whereTipoHierba{ 
    @Field({nullable:true})
    @MaxLength(10)
    nombre: string;
    @Field(type => Int,{nullable:true})
    @Min(0)
    cantidad: number;
}
