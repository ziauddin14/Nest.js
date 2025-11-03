import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CrudController } from './crud/crud.controller';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationService } from './authentication/authentication.service';
import { CrudService } from './crud/crud.service';
import { TodoMiddleware } from './todo.middleware'; 

@Module({
  controllers: [CrudController, AuthenticationController],
  providers: [AuthenticationService, CrudService],
})
export class TodoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TodoMiddleware).forRoutes('todo');
  }
}
