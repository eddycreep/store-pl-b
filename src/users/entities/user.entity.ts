import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class Users {
    @PrimaryGeneratedColumn()
    emp_id: number;

    @Column()
    emp_name: string;
    
    @Column()
    emp_surname: string;

    @Column()
    id_no: string;
    
    @Column()
    username: string;
    
    @Column()
    password: string;

    @Column()
    role: string;
    
    @Column()
    phone_number: string;
    
    @Column()
    email_address: string;

    constructor(item: Partial<Users>) {  //create new entities
        Object.assign(this, item);
    }
}