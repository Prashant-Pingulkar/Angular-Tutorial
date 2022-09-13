import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router,Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {
  url:string=''
  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
    this.router.events.subscribe((event:Event)=>{
      if(event instanceof NavigationEnd){
        this.url=this.router.url
      }
    })
  }

}
