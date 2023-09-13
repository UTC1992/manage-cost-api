import { Module } from '@nestjs/common'
import { MongooseService } from './services/mongoose.service'

@Module({
  providers: [MongooseService],
  exports: [MongooseService],
})
export class MongooseConfigModule {}
