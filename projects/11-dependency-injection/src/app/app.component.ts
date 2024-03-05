import { Component, OnInit, inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from './data';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInfoComponent],
  template: `
    <h1>User Listing</h1>
    @for (user of userData; track $index) {
      <app-user-info [user]="user"/>
    }
  `,
})
export class AppComponent implements OnInit {
  userService = inject(UserService)
  userData: User[] = [];

  async ngOnInit(): Promise<void> {
    const userData: User[] = await this.userService.getUserData();
    this.userData = userData;
  }
}
