import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../login.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestapiService } from '../restapi.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users:any=[];
  regDetail={
    "emailId":"",
   "mobileNumber":0,
   "userName":"",
   "password":""
}
updateDetail={
  "emailId":"",
  "newpwd":"",
  "cnfpwd":""
}

  

  // defaultEmail = ['reddygsrinivas0@gmail.com','deepak123@gmail.com','sanju123@gmail.com'];
  // defaultPwd=['asdf','zxcv','qwer'];
  public Email : string;
  public Password : string;
  showEmail=true;
  @Input() loginchild : boolean = false;
  public loginvalue: boolean =false;
  userForm: FormGroup; 
  signForm:FormGroup;
  
  
  constructor(private router:Router,private log:LoginService,fb: FormBuilder,private restapi:RestapiService) {

    this.userForm = fb.group({
      'regMail':['',[Validators.required,Validators.email]],
      'newPwd': ['',Validators.required],
      'confirmPwd': ['',Validators.required],
    });
  }
  get regMail(){
    return this.userForm.get('regMail');
  }
  get newPwd(){
    return this.userForm.get('newPwd');
  }

   get confirmPwd(){
    return this.userForm.get('confirmPwd');
    
  }
 
     ngOnInit(){
     

      }
      regAdd(value:any){
        this.regDetail.emailId=value.EmailAddress;
        this.regDetail.mobileNumber=value.MobileNumber;
        this.regDetail.userName=value.FullName;
        this.regDetail.password=value.Password;
            this.restapi.createPostData(this.regDetail,this.regAdd);
          
      
      }
      updatPwd(value){
          this.updateDetail.emailId=value.regMail;
          this.updateDetail.newpwd=value.newPwd;
          this.updateDetail.cnfpwd=value.confirmPwd;
          this.log.updateRequest(this.updateDetail,this.updatPwd);
      }

 

  login(){
    
    //console.log(this.Email + ' - ' + this.Password);
    // if(!(this.Email == this.defaultEmail && this.Password == this.defaultPwd)) {
    //   alert('Please provide proper user name and Password');



    this.log.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
       this.users = data;
       for(var i=0;i<this.users.length;i++){
        if(!(this.Email == this.users[i].emailId && this.Password == this.users[i].password)) {
          if(i==this.users.length-1)
          alert('Please provide proper user name and Password');
        }
      
      else{
          this.router.navigate(['home']);
          this.log.loginfun(true);
          this.log.about(true);
          this.log.user(this.users[i].userName);
          
          break;
      }
      }
     })  
    
}
   submit(){
     this.showEmail=!this.showEmail;
     
   }
   

}
