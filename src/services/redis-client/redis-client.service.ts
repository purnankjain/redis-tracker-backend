import { RedisService } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';
import { ClientSocketGateway } from 'src/gateway/client-socket/client-socket.gateway';

@Injectable()
export class RedisClientService {
  constructor(
    private readonly redisService: RedisService,
    private readonly clientSocketGateway: ClientSocketGateway,
  ) {
    try {
      this.redisService.getClient();
    } catch (ex) {
      console.log({ ex });
    }
  }

  async subscribe() {
    const client = this.redisService.getClient();
    const client2 = this.redisService.getClient('b');
    console.log({ size: this.redisService.clients.size });
    await client.config('SET', 'notify-keyspace-events', 'KEA');
    client.psubscribe('__keyspace@0__:*');
    client.on('pmessage', (pattern, channel, message) => {
      console.log({ pattern, channel, message });
      if (message === 'set' || message === 'get') {
        const key = channel.substring(15);
        console.log({ key });
        client2.get(key).then((val) => {
          console.log('emitting');
          this.clientSocketGateway.server.emit('update', { key, val });
        });
      }
    });
  }
}
