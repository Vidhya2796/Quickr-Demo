import { Component, OnInit } from '@angular/core';
import  { UserAccount } from '../userAccount'
import { UserService } from '../user.service';
@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  userAccount:UserAccount=new UserAccount();
  
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
 /*  newUser(): void {
   
    this.userAccount = new UserAccount();//updating new user
  } */

  onRegister(){
  console.log("in register() method")
  this.userService.createUser(this.userAccount)
      .subscribe(data => console.log(data), error => console.log(error));
    this.userAccount = new UserAccount();
}







}

 