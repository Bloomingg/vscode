import { ApiProperty } from "@nestjs/swagger";
import { modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class User {

  @ApiProperty({ description: '用户名', example: 'blooming' })
  @prop()
  username: string

  @ApiProperty({ description: '密码', example: 'password123' })
  @prop()
  password: string
}