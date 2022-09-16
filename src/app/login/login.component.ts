import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData:any={}
  errorMessage=''
  constructor(private userService:UserAuthService,private router:Router) { }

  ngOnInit(): void {
  }
   public login(form:any):void {
    
    console.log(form.value)
    this.userService.getUser(form.value).subscribe((data)=>{
      localStorage.setItem('logged','true')
      localStorage.setItem('user',data.data.userName)
      this.router.navigate(['/dashboard'])
    },
    (error)=>{
      this.errorMessage=error.message
    })
  }

}
