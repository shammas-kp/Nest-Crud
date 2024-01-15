import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({name:`users-shammas`})

export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    email:string;

    @Column({type:'text'})
    password:string;


}    
