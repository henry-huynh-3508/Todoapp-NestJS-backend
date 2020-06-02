import { Controller, Post, Body, Get } from '@nestjs/common';
import { TodoListService } from './todolist.service';

@Controller('todolist')
export class TodoListController {
  constructor(private readonly todolistService: TodoListService) {}

  @Post()
  addTodoList(
    @Body('title') todolistTitle: string,
    @Body('description') todolistDescription: string,
    @Body('items') todolistItems: string[],
  ): any {
    this.todolistService.addTodoList(
      todolistTitle,
      todolistDescription,
      todolistItems,
    );
    return { message: 'Success' };
  }

  @Get()
  getAllTodoLists(): any {
    return this.todolistService.getTodoLists();
  }
}
