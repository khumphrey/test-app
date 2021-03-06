import { Component } from '@angular/core';
import { UserService } from "./user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  user$;
  constructor(private userService: UserService) {
    this.user$ = this.userService.getUser();
  }
}
