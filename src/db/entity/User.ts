import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({nullable:true})
    createdAt: string;

    @Column('varchar', {length:30})
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
