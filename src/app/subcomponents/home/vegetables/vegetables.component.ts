import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent  {

  constructor(private router:Router,private cart:CartService) { }


vegdetail= {
     "Name":"",
     "Price": 0,
     "img":"",
     "quantity":0
  }
  
  

  value:number;
  storeCart:any=[];
  addShow:boolean=false;
  @ViewChild('closeButton')
  closeButton;
  notSave:any;
  
  

  vegShow(name,price,img){
    this.vegdetail.Name = name;
    this.vegdetail.Price=price;
    this.vegdetail.img=img;
    
  }
 calculatePrice(event){
  this.vegdetail.quantity=parseInt(event.target.value);
   this.value=this.vegdetail.Price*this.vegdetail.quantity;
  
 }
 async  addtoCart(){
   var cartSave=JSON.parse(localStorage.getItem("cartDetail"));
   if(cartSave==null){
    var cartStore={"name":this.vegdetail.Name, "price":this.vegdetail.Price,"quantity":this.vegdetail.quantity,"value":this.value,"picture":this.vegdetail.img}
    this.storeCart.push(cartStore);
    localStorage.setItem("cartDetail",JSON.stringify(this.storeCart));
   }
  
   else{
   
   for(var i=0;i<cartSave.length;i++){
     if(cartSave[i].name==this.vegdetail.Name){
      cartSave[i].quantity=cartSave[i].quantity+this.vegdetail.quantity;
      cartSave[i].value=cartSave[i].price*cartSave[i].quantity;
      localStorage.setItem("cartDetail",JSON.stringify(cartSave));
      break;
     }
     else{
       if(i==cartSave.length-1){
      var cartStore={"name":this.vegdetail.Name, "price":this.vegdetail.Price,"quantity":this.vegdetail.quantity,"value":this.value,"picture":this.vegdetail.img}
      cartSave.push(cartStore);
      localStorage.setItem("cartDetail",JSON.stringify(cartSave));
      break;
       }
     }
   }
   }

  this.addShow=true;

  await this.sleep(3000);
  this.closeButton.nativeElement.click();
    this.vegdetail.quantity=0;
    this.value=0;
    this.addShow=false;
 }
sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
 gotoCart(){
   this.router.navigate(['cart']);
      this.cart.cartfun(this.storeCart);
     
      
 }


  
}
