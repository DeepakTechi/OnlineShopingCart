import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './subcomponents/login/login.component';
import { LoginService }  from "./subcomponents/login.service";
import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-Login-App';
  loginSuccess:boolean;
  loginvalue: boolean;
  private loginunsub: Subscription;
  userValue:string;
  private userSub:Subscription;
   
  constructor(private log: LoginService){}

  ngOnInit(){
    //this.loginSuccess=this.appparent.loginchild;
    this.loginunsub=this.log.loginobserve.subscribe(s=> this.loginvalue=s);
   this.userSub= this.log.userName.subscribe(a=>this.userValue=a);
  }
  ngOnDestroy(){
    this.loginunsub.unsubscribe();
    this.userSub.unsubscribe();
  }
  logout(){
    this.loginvalue=false;
  }
}
