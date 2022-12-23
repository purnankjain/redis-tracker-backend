import { RedisService } from '@liaoliaots/nestjs-redis';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RedisClientService {
  constructor(private readonly redisService: RedisService) {
    try {
      this.redisService.getClient();
    } catch (ex) {
      console.log({ ex });
    }
  }
}
