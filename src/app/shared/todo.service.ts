import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './interfaces';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {
  }

  getTodos(): any {
    return this.http.get('https://ng-todo-968be.firebaseio.com/todos.json')
      .pipe( map ( res => {
        return Object.keys(res)
          .map( key => ({
            ...res[key],
            id: key,
          }));
      }));
  }

  addTodo(todo: Todo): any {
    return this.http.post('https://ng-todo-968be.firebaseio.com/todos.json', todo);
  }

  removeTodo(id): any {
    return this.http.delete(`https://ng-todo-968be.firebaseio.com/todos/${id}.json`);
  }

  updateTodo(todo): any {
    return this.http.patch(`https://ng-todo-968be.firebaseio.com/todos/${todo.id}.json`, todo);
  }
}
