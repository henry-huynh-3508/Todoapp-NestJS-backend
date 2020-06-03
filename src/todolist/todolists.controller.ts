import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
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

  @Get(':id')
  getSingTodoList(@Param('id') listid: string): any {
    return this.todolistService.getSingleTodoList(listid);
  }

  @Patch(':id')
  updateSingleTodoList(
    @Param('id') todolistID: string,
    @Body('title') todolistTitle: string,
    @Body('description') todolistDescription: string,
    @Body('items') todolistItems: string[],
  ): any {
    this.todolistService.updateSingleTodoList(
      todolistID,
      todolistTitle,
      todolistDescription,
      todolistItems,
    );
    return null;
  }
}
