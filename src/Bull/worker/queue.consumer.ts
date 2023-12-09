/* eslint-disable prettier/prettier */
import { Process, Processor } from '@nestjs/bull';

import { Job } from 'bull';
import { BaseQueueConsumer } from './BaseConsumer';

@Processor('testQueue')
export class ReportQueueConsumer extends BaseQueueConsumer {
  @Process('test')
  async generateReport(job: Job<unknown>) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
    console.log(job.data);
    return { done: true };
  }

  @Process('test2')
  async test2(job: Job<unknown>) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
    console.log(job.data);
    return { done: true };
  }
}
