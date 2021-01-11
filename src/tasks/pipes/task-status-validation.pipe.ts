import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any) {
    value = value.toUpperCase();
    if (!this.IsStatusValied(value)) {
      throw new BadRequestException(`Status ${value} is invalid`);
    }
    return value;
  }

  private IsStatusValied(status: any) {
    const index = this.allowedStatuses.indexOf(status);
    return index !== -1;
  }
}
