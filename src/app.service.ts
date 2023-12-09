import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue('testQueue') private readonly queue: Queue) {}

  getHello(): string {
    return 'Hello World!';
  }

  async test(data: any): Promise<void> {
    this.queue.add('test2', { data }, { priority: 1, removeOnComplete: true });
  }
}
