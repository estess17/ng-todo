import { Component, OnInit } from '@angular/core';
import {Todo} from '../../shared/interfaces';
import {TodoService} from '../../shared/todo.service';
import {MatDialog} from '@angular/material/dialog';
import {RemoveDialogComponent} from '../../shared/remove-dialog/remove-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {
  todos: Todo[] = [];
  input;

  constructor(private todoService: TodoService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe( (todos: Todo[]) => this.todos = todos);
  }

  createTodo(): any {
    if (this.input.trim()) {

      const todo: Todo = {
        title: this.input,
        completed: false
      };

      this.todoService.addTodo(todo).subscribe(() => {
        this.todoService.getTodos().subscribe( (todos: Todo[]) => this.todos = todos);
        this.input = '';
      });
    }
  }

  removeTodo(id): any {
    const dialogRef = this.dialog.open(RemoveDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        this.snackBar.open('Todo deleted', 'Dismiss', {duration: 2000});

        this.todoService.removeTodo(id).subscribe(() => {
          this.todos = this.todos.filter(todo => todo.id !== id);
        });
      }
    });
  }
}
