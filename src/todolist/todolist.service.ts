import { Injectable, NotFoundException } from '@nestjs/common';
import { Todolist } from './todolist.model';
@Injectable()
export class TodoListService {
  todolists: Todolist[] = [];

  addTodoList(tittle: string, desc: string, items: any[]): any {
    const newTodoList = new Todolist(
      Math.random().toString(),
      tittle,
      desc,
      items,
    );
    this.todolists.push(newTodoList);
  }

  getTodoLists(): any {
    return [...this.todolists];
  }

  getSingleTodoList(listid: string): any {
    const list = this.todolists.find(todolist => todolist.id === listid);
    if (!list) {
      throw new NotFoundException('Could not find list ' + listid);
    }
    return { ...list };
  }
}
