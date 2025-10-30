import { Injectable } from '@nestjs/common';


//basic todo service
@Injectable() 
export class AppService {
  private todos: string[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  getTodos(): string[] {
    return this.todos;
  }

  addTodo(todo: string): string[] {
    this.todos.push(todo);
    return this.todos;
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}
