import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../shared/interfaces';
import {TodoService} from '../../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() onRemove = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  remove(): any {
    this.onRemove.emit(this.todo.id);
  }

  updateTodo(todo): any {
    console.log(todo.completed);
    this.todoService.updateTodo({
      ...todo,
      completed: !todo.completed,
    }).subscribe(() => {
      this.todo = {
        ...this.todo,
        completed: !todo.completed
      };
    });
  }
}
