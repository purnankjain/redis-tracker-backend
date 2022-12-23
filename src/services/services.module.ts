import { Module } from '@nestjs/common';
import { RedisClientService } from './redis-client/redis-client.service';

@Module({
  providers: [RedisClientService]
})
export class ServicesModule {}
