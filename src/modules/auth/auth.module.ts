import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([])],
  providers: [AuthService],
})
export class AuthModule {}
