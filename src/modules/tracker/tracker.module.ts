import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/services/services.module';
import { TrackerController } from './tracker.controller';
import { TrackerService } from './tracker.service';

@Module({
  controllers: [TrackerController],
  providers: [TrackerService],
  imports: [ServicesModule],
})
export class TrackerModule {}
