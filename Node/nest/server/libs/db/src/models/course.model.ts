import { ApiProperty } from "@nestjs/swagger";
import { modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Episode } from "./episode.model";

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Course {

  @ApiProperty({ description: '课程名称', example: '课程名称1' })
  @prop()
  name: string

  @ApiProperty({ description: '课程封面', example: 'http://example.com' })
  @prop()
  cover: string
}