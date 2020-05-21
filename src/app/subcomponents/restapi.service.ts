import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  restapiUrl="http://localhost:9092/User/SaveUsers";

  constructor( private httpClient:HttpClient,private router:Router) { }
  
  

  // ceratePostData(regDetail):Observable<any>{
  //        return this.httpClient.post<any>(this.restapiUrl,regDetail);

  //         }


  createPostData(regDetail,regAdd:Function){
        this.httpClient.post<any>(this.restapiUrl,regDetail).pipe(first()).subscribe(
          Response=>regAdd(Response,200),
          error=>regAdd(error,error.status),
        )
  }
}