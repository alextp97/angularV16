import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersSignalsPageComponent } from './pages/users-signals-page/users-signals-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: UsersPageComponent
      },
      {
        path: 'list-signals',
        component: UsersSignalsPageComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
