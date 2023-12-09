import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from '@nestjs/bull';
import { ReportQueueConsumer } from './Bull/worker/queue.consumer';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'testQueue',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ReportQueueConsumer],
})
export class AppModule {}
