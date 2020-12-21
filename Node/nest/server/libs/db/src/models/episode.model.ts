import { ApiProperty } from "@nestjs/swagger";
import { modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Course } from "./course.model";


@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Episode {
  @ApiProperty({ description: '课时名称', example: '第一课时' })
  @prop()
  name: string

  @ApiProperty({ description: '课时文件', example: 'http://example.com' })
  @prop()
  file: string

  @ApiProperty({ description: '课程名称', example: '课程名称' })
  @prop({ ref: 'Course' })
  course: Ref<Course>
}