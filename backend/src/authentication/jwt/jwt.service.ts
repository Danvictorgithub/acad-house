import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from "jsonwebtoken";


interface userObj {
    id: number;
    email: string;
}
@Injectable()
export class JwtService {
    decode(token: string): userObj {
        try {
            return jwt.verify(token, process.env.JWT_SECRET || "secret") as userObj;
        } catch (error) {
            throw new UnauthorizedException("Invalid token");
        }
    }
}
