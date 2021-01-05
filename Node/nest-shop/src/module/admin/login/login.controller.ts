import { Controller, Get } from '@nestjs/common';

@Controller('admin')
export class LoginController {
  @Get('login')
  login() {
    return { "success": true }
  }
}
