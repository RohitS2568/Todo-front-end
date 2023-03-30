import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  {
    path: 'login',
     component: LoginComponent
   },
   {
    path: 'register',
     component: RegisterComponent
   },
   {
    path: 'todo',
     component: TodoComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
