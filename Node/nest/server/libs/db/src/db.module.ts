import { Global, Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { DbService } from './db.service';
import { Course } from './models/course.model';
import { Episode } from './models/episode.model';
import { User } from './models/user.model';

const models = TypegooseModule.forFeature([User, Course, Episode])

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://root:19980930qq@localhost:27017/nestpro?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
      {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
      }),
    models
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule { }
