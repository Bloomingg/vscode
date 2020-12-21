import { Course } from '@libs/db/models/course.model';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
  model: Course
})
@Controller('courses')
@ApiTags('课程')
export class CoursesController {
  constructor(@InjectModel(Course) private readonly model: ReturnModelType<typeof Course>) {

  }

  @Get('option')
  option() {
    return {
      title: "课程管理",
      column: [
        {
          prop: "name",
          label: "课程名称",
          search: true,
          sortable: true,
          regex: true,
          row: true,
          rules: [
            {
              required: true,
              message: "请输入课程名称",
              trigger: "blur",
            },
          ],
        },
        {
          prop: "cover",
          label: "课程封面",
          type: 'upload',
          listType: 'picture-img',
          row: true,
          accept: ".jpg,.jpeg,.png,.JPG,.JPEG,.PBG",
          action: "/upload"
        },
      ],
    }
  }
}
