/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('baseQueue') private readonly baseQueue: Queue) {}

  addJobToQueue(name: string, data: any, priority = 5) {
    this.baseQueue.add(name, data, {
      priority: priority,
      attempts: 3,
      backoff: { type: 'fixed', delay: 5000 },
      removeOnComplete: true,
    });
  }
}
