import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class  HomeComponent {
  loginvalue: string;

  constructor(private log:LoginService) { }

  // ngOnInit(){
  //   this.log.loginobserve.subscribe(loginvalue=>this.loginvalue=loginvalue)
  // }
  // newloginfn(){
  //   this.log.loginfun("")
  // }
}
