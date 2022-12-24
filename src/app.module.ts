import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackerModule } from './modules/tracker/tracker.module';
import { ServicesModule } from './services/services.module';
import { ClientSocketModule } from './gateway/client-socket/client-socket.module';

@Module({
  imports: [
    RedisModule.forRoot({
      config: [
        {
          url: 'redis://localhost:6379',
          name: 'a',
          onClientCreated: () => {
            console.log('created 1');
          },
        },
        {
          url: 'redis://localhost:6379',
          name: 'b',
          namespace: 'b',
          onClientCreated: () => {
            console.log('created 2');
          },
        },
      ],
    }),
    TrackerModule,
    ServicesModule,
    ClientSocketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
