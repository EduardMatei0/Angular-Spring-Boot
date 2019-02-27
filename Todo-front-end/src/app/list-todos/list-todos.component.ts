import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = []

  message: string;

  constructor(private todoService: TodoDataService,
              private route: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('Eduard Matei').subscribe(data => {
      console.log(data);
      this.todos = data;
    })
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('Eduard Matei', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`update ${id}`);
    this.route.navigate(['todos',id]);
  }

  addTodo() {
    this.route.navigate(['todos', -1]);
  }

}
