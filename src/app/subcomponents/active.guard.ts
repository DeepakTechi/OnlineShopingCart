import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from "./login.service";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate {

  constructor(private log:LoginService,private router:Router){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    if(this.log.loggedIn){
      let href = state.url;
      if(href == '/adress' || href == '/board' ) {
        return false;
      } 
      return true;
    }else{
    this.router.navigate(['']);
    }
  }
  
}
