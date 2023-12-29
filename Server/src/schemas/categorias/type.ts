import { Field, ID, ObjectType } from "type-graphql";
import { tipos_hierba } from "../tipos-hierba/type";

@ObjectType()
export class categorias {
    @Field(type => ID)
    id: string;
    @Field()
    nombres: string;
    @Field()
    created_at: Date;
    @Field(type => [tipos_hierba])
    tipos_hierba: tipos_hierba[]    
}
