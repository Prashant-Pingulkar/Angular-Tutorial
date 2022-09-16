import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private httpClient:HttpClient) { }

  getUser(data:any):Observable<any>{
    console.log('http://localhost:1050/getuser/abc@gmail.com/wetr23')
    return this.httpClient.get('http://localhost:1050/getuser/'+data.emailId +'/'+data.password,{withCredentials:true})
  }

  registerUser(data:any):Observable<any>{
    return this.httpClient.post('http://localhost:1050/register',data)
  }
}
