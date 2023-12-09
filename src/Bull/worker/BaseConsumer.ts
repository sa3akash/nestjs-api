/* eslint-disable prettier/prettier */
import { OnQueueActive, OnQueueCompleted, OnQueueFailed } from '@nestjs/bull';
import { Job } from 'bull';

export abstract class BaseQueueConsumer {
  @OnQueueActive()
  onActive(job: Job) {
    console.log(`Processing job ${job.id} of type ${job.name}`);
  }

  @OnQueueCompleted()
  onCompleted(job: Job) {
    console.log(`Completed job ${job.id} of type ${job.name}`);
    job.remove(); // Remove the job from the queue when it is completed
  }

  @OnQueueFailed()
  onError(job: Job, error: Error) {
    console.error(`Failed job ${job.id} of type ${job.name}`);
    console.error(error);
    // Handle the error as needed
  }
}
