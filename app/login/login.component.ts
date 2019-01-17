import { Component, OnInit } from '@angular/core';
import  { LoginAccount } from '../loginAccount'
import { UserService } from '../user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginAccount:LoginAccount=new LoginAccount();
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onLogin(){
    console.log("in login() method")
    this.userService.validateUser(this.loginAccount)
    .subscribe(data => console.log(data), error => console.log(error));
    this.loginAccount=new LoginAccount();
  }

}
