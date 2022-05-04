import { BaseEntity, Entity, PrimaryColumn } from "typeorm";



@Entity("transactions")
export class TransactionEntity extends BaseEntity {

    @PrimaryColumn({type: "uuid"})
    id: string;
    
    
}


