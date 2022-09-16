import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  formData:any={}
  constructor(private userService:UserAuthService) { }

  ngOnInit(): void {
  }
getUser(loginForm:NgForm){
  console.log(loginForm.value)
  this.userService.getUser(loginForm.value).subscribe((data)=>{
    console.log(data)
  })
}

  register(registerForm:NgForm){
    console.log(registerForm.value)
    this.userService.registerUser(registerForm.value).subscribe((data)=>{
      console.log(data)
    })
  }

}
