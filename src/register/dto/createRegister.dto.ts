import { IsString, IsNotEmpty, MinLength, IsEmail, MaxLength, IsPhoneNumber } from "class-validator";
export class CreateRegisterDTO{

    @IsString()
    @IsNotEmpty()
    name:string

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password:string;

    @IsNotEmpty()
    @IsString()
    site:string;   
    
    phone?: string;
}