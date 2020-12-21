import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  app.enableCors()

  const options = new DocumentBuilder()
    .setTitle('Swagger-Ui')
    .setDescription('The Swagger API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('Swagger', app, document);

  await app.listen(3000);
  console.log("http://localhost:3000");

}
bootstrap();
