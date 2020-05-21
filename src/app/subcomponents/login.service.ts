import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Observable} from 'rxjs';
import { first } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {


  private loginfield=new BehaviorSubject(false);
  loginobserve=this.loginfield.asObservable();
  private userObj:any=new BehaviorSubject('');
  isLoggedIn = false;
  userName = this.userObj.asObservable(); 

  private REST_API_SERVER = "http://localhost:9092/User/AllUsers";
  private putApiUrl="http://localhost:9092/User/emailId";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest():Observable<object>{
    return this.httpClient.get(this.REST_API_SERVER);
  }
  public updateRequest(updateDetail,updatePwd) {
    return this.httpClient.put(this.putApiUrl.replace('emailId',updateDetail.emailId) + "?password="+updateDetail.newpwd,updateDetail).pipe(first()).subscribe(
      newResponse=>updatePwd(newResponse,200),
      error=>updatePwd(error,error.status),
    )
  }

  loginfun(loginvalue:boolean){

    this.loginfield.next(loginvalue)

  }
  about(value:boolean){
    this.isLoggedIn = value;
  }  

  loggedIn() {
  return this.isLoggedIn;
  }
  user(name:string){
      this.userObj.next(name);
  }


   
}
