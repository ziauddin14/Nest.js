import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TodoMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request received on ToDo route');
    console.log('Method:', req.method);
    console.log('URL:', req.originalUrl);
    console.log('Time:', new Date().toISOString());
    next(); 
  }
}
