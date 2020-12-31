import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path'
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session'
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //配置静态资源目录
  app.useStaticAssets(path.join(__dirname, '..', 'public'))
  //配置模板引擎
  // app.setBaseViewsDir('views')
  // app.setViewEngine('ejs')

  //配置cookie
  app.use(cookieParser('blooming'))
  //配置session
  app.use(session({
    secret: 'blooming',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 219000, httpOnly: true }
  }))

  await app.listen(3000);
}
bootstrap();
