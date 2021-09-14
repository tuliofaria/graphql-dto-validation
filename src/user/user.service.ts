import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {
    console.log('UserService');
  }
  async findUser(): Promise<string> {
    return 'Tulio Faria';
  }
}
