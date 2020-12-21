import { DbModule } from '@libs/db/db.module';
import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UserModule } from './user/user.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodeController } from './episode/episode.controller';
import { EpisodeModule } from './episode/episode.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [MulterModule.register({
    dest: "uploads"
  }), DbModule, UserModule, CoursesModule, EpisodeModule],
  controllers: [AdminController, EpisodeController],
  providers: [AdminService],
})
export class AdminModule { }
