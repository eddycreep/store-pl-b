import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class UsersActivity {
    @PrimaryGeneratedColumn()
    uid: number;

    @Column()
    emp_id: number;
    
    @Column()
    emp_name: string;

    @Column()
    activity_id: number;
    
    @Column()
    activity: string;
    
    @Column()
    activity_type: string;

    @Column()
    time_logged: string;
    
    @Column()
    log_message: string;

    constructor(activity: Partial<UsersActivity>) {  //create new entities
        Object.assign(this, activity);
    }
}