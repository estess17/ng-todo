import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TodosPageComponent } from './components/todos-page/todos-page.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TodoComponent } from './components/todo/todo.component';
import {MatCardModule} from '@angular/material/card';
import {TodoService} from './shared/todo.service';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { RemoveDialogComponent } from './shared/remove-dialog/remove-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    TodosPageComponent,
    TodoComponent,
    RemoveDialogComponent,
  ],
  entryComponents: [
    RemoveDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
