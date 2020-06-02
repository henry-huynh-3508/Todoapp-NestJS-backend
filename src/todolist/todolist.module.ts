import { Module } from '@nestjs/common';
import { TodoListController } from './todolists.controller';
import { TodoListService } from './todolist.service';

@Module({
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class TodolistModule {}
