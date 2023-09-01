import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UsersSignalsPageComponent } from './pages/users-signals-page/users-signals-page.component';



@NgModule({
  declarations: [
    UsersPageComponent,
    UsersSignalsPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
