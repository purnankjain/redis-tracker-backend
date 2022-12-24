import { Module } from '@nestjs/common';
import { ClientSocketModule } from 'src/gateway/client-socket/client-socket.module';
import { RedisClientService } from './redis-client/redis-client.service';

@Module({
  providers: [RedisClientService],
  exports: [RedisClientService],
  imports: [ClientSocketModule],
})
export class ServicesModule {}
