import { Module } from '@nestjs/common';
import { AdminModule } from './module/admin/admin.module';
import { ApiModule } from './module/api/api.module';
import { DefaultModule } from './module/default/default.module';
import { ToolsService } from './service/tools/tools.service';

@Module({
  imports: [AdminModule, ApiModule, DefaultModule],
  controllers: [],
  providers: [ToolsService],
})
export class AppModule { }
