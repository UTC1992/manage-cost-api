import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './modules/auth/controllers/auth.controller';
import { MongooseConfigModule } from './modules/mongoose/mongoose.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [MongooseConfigModule, AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
