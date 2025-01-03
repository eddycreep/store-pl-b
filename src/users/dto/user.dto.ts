import { IsEmail, IsEnum, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
    @IsString() emp_name: string;
    @IsString() emp_surname: string;
    @IsString() id_no: string;
    @IsString() username: string;
    @IsString() password: string;
    @IsString() role: string;
    @IsString() phone_number: string;
    @IsString() email_address: string;
}

export class UserDto {
    @IsNumber() emp_id: number;
    @IsString() username?: string;
    @IsString() password?: string;
    @IsString() id_no?: string;
    @IsString() emp_name?: string;
    @IsString() emp_surname?: string;
    @IsString() role?: string;
    @IsString() phone_number?: string;
    @IsString() email_address?: string;
}


export class UserActivtyDto {
    @IsNumber() emp_id: number;
    @IsString() emp_name: string;
    @IsNumber() activity_id: number;
    @IsString() activity: string;
    @IsString() activity_type: string;
    @IsString() time_logged: string;
    @IsString() log_message: string
}