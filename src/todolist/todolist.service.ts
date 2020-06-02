import { Injectable } from '@nestjs/common';
import { Todolist } from './todolist.model';
@Injectable()
export class TodoListService {
  todolists: Todolist[] = [];

  addTodoList(tittle: string, desc: string, items: any[]): any {
    const newTodoList = new Todolist(
      new Date().toISOString(),
      tittle,
      desc,
      items,
    );
    this.todolists.push(newTodoList);
  }

  getTodoLists(): any {
    return [...this.todolists];
  }
}
