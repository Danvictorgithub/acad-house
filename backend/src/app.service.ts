import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Object {
    return { message: "AcadHouse API v1.0.0" };
  }
}
