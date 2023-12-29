import { Field, ID, InputType, ObjectType, Int } from "type-graphql";
import { tipos_hierba } from "../tipos-hierba/type";
import { MaxLength} from "class-validator";

@ObjectType()
export class categorias {
    @Field(type => ID)
    id: string;
    @Field()
    nombre: string;
    @Field()
    created_at: Date;
    @Field(type => [tipos_hierba])
    tipos_hierba: tipos_hierba[]   
}

@InputType()
export class whereCategorias{ 
    @Field({nullable:true})
    @MaxLength(20)
    nombre: string;
}

@InputType()
export class EntradaCategorias{ 
    @Field()
    @MaxLength(20)
    nombre: string;
}

@InputType()
export class EditarCategorias{ 
    @Field({nullable:true})
    @MaxLength(20)
    nombre: string;
}


