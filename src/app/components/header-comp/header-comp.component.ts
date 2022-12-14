import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.scss']
})
export class HeaderCompComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  logInOrOut() {
    if(this.userService.user) {
      this.userService.logOut()
    } else {
      this.userService.login();
    }
  }

}
