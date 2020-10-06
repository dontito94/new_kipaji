import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../shared/tasks.status-enum';

export class TaskStatusValidation implements PipeTransform {
  readonly allowedStatus = [
    TaskStatus.DONE,
    TaskStatus.IN_PROGRESS,
    TaskStatus.OPEN,
  ];

  transform(value: any) {
    value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is not a valid status`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const idxOf = this.allowedStatus.indexOf(status);
    return idxOf !== -1;
  }
}
