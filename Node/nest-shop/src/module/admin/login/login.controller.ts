import { Controller, Get } from '@nestjs/common';

@Controller('admin/login')
export class LoginController {
  @Get('')
  login() {
    return { "success": true }
  }
}
