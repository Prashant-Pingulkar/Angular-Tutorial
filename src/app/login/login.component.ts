import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData:any={}
  constructor() { }

  ngOnInit(): void {
  }
   public login(form:any):void {
    
    console.log(form.form.controls.uName.value)
  }

}
