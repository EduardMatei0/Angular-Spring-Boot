import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/models/todo';
import { API_URL } from 'src/models/constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username) {
  return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username, id) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username, id, todo) {
    return this.http.put<Todo>(
        `${API_URL}/users/${username}/todos/${id}`, 
        todo);
  }

  createTodo(username, todo) {
    return this.http.post<Todo>(
        `${API_URL}/users/${username}/todos`, 
        todo);
  }

}
