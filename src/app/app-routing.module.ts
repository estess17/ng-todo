import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './shared/main-layout/main-layout.component';
import {TodosPageComponent} from './components/todos-page/todos-page.component';


const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', component: TodosPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
