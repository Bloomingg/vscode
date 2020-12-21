import { User } from '@libs/db/models/user.model';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  model: User
})
@ApiTags('用户管理')
@Controller('user')
export class UserController {
  constructor(@InjectModel(User) private readonly model) { }

  @Get('option')
  option() {
    return {
      column: [
        {
          prop: "username",
          label: "用户名",
          search: true,
          rules: [
            {
              required: true,
              message: "请输入用户名",
              trigger: "blur",
            },
          ],
        },
        {
          prop: "createdAt",
          label: "注册时间",
          addDisplay: false,
          editDisplay: false
        },
        {
          prop: "password",
          label: "密码",
          hide: true
        },
      ],
    }
  }
}
