import { Injectable } from '@nestjs/common';
import { RedisClientService } from 'src/services/redis-client/redis-client.service';

@Injectable()
export class TrackerService {
  constructor(private readonly redisClientService: RedisClientService) {
    this.initiateTracking();
  }

  async initiateTracking() {
    this.redisClientService.subscribe();
  }
}
