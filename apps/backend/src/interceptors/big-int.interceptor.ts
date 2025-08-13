// apps/backend/src/interceptors/big-int.interceptor.ts

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

function convertBigIntToString(value: unknown): unknown {
  if (value === null || value === undefined) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => convertBigIntToString(item));
  }

  if (typeof value === 'object') {
    const obj = value as Record<string, unknown>;

    return Object.keys(obj).reduce(
      (newObj, key) => {
        const val = obj[key];
        newObj[key] =
          typeof val === 'bigint' ? val.toString() : convertBigIntToString(val);
        return newObj;
      },
      {} as Record<string, unknown>,
    );
  }

  return value;
}

@Injectable()
export class BigIntInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((data) => convertBigIntToString(data)));
  }
}
