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

  updateSingleTodoList(id: string, title: string, desc: string, items: any[]) {
    const listIndex = this.todolists.findIndex(todolist => todolist.id === id);
    if (!listIndex) {
      throw new NotFoundException('Could not find list ' + id);
    }
    const updatedTodolist = { ...this.todolists[listIndex] };
    if (title) {
      updatedTodolist.title = title;
    }
    if (desc) {
      updatedTodolist.desc = desc;
    }
    if (items) {
      updatedTodolist.items = items;
    }
    console.log(updatedTodolist);
    this.todolists[listIndex] = updatedTodolist;
    console.log(this.todolists);
  }
}
