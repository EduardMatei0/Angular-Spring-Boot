import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/todo-data.service';
import { Todo } from 'src/models/todo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number;
  todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoDataService,
    private router: Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.todo = new Todo(this.id, '', false, new Date());

    if(this.id != -1) {
      this.todoService.retrieveTodo('Eduard Matei',this.id)
      .subscribe(data => this.todo = data)
    }  
  }

  saveTodo() {
    if(this.id == -1) {
      // create todo
      this.todoService.createTodo('Eduard Matei', this.todo)
      .subscribe(
        data => { console.log(data)
        this.router.navigate(['todos']) }
      )
    } else {
      this.todoService.updateTodo('Eduard Matei', this.id, this.todo)
      .subscribe(
        data => { console.log(data)
        this.router.navigate(['todos']) }
      )
    }  
  }
}
