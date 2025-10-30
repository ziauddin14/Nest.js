import { Controller, Delete, Get, Param, Post , Body} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('todos')
  getTodos(): string[] {
    return this.appService.getTodos();
  }

  @Post('todos')
  addTodo(@Body() body: { todo: string }): string[] {
    const { todo } = body;
    return this.appService.addTodo(todo);
  }

  @Delete('todos/:id')
  removeTodo(@Param('id') id: number): string[] {
    this.appService.removeTodo(id);
    return this.appService.getTodos();
  }
}
