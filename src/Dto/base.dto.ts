/* eslint-disable prettier/prettier */
import { Transform, plainToClass } from 'class-transformer';
import { Expose } from 'class-transformer';

export abstract class BaseDTO {
  @Expose()
  id: number;

  @Expose()
  createAt: Date;

  @Expose()
  updateAt: Date;

  firstName: string;
  lastName: string;

  @Transform(({ obj }) => obj.firstName + obj.lastName)
  @Expose()
  fullName: string;

  static PlainToClassModal<T>(this: new (...args: any[]) => T, obj: T): T {
    return plainToClass(this, obj, { excludeExtraneousValues: true });
  }
}
