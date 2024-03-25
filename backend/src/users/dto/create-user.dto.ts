import { IsEmail, Length, Matches, buildMessage } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: 'password too weak',
    })
    password: string
}
