import { Component, signal, OnInit, inject, computed } from '@angular/core';
import { User } from '../../interfaces/users';
import { UsersService } from '../../services/users.service';
import { filter } from 'rxjs';

@Component({
  templateUrl: './users-signals-page.component.html',
  styleUrls: ['./users-signals-page.component.css']
})
export class UsersSignalsPageComponent implements OnInit {
  
  private usersService = inject( UsersService );

  public users = signal<User[]>([])
  public currentPage = signal<number>(1);
  public labelTotalUsers = computed( () => `Total de usuarios: ${this.users().length}`);
  
  ngOnInit(): void {
    this.loadMoreUsers( this.currentPage() );
  }

  loadMoreUsers( page: number ) {
    this.usersService.loadPage( page )
    .pipe(
      filter( users => users.length > 0)
    )
    .subscribe((users) => {
      // this.users.set( users );
      this.currentPage.set( page );

      this.users.update( currentUsers => [...currentUsers, ...users])
    });
  }
}
