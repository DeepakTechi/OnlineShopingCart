import { Component, OnInit,ViewChild } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  notSave: any;

  constructor(private router:Router,private cart:CartService) { }

  ngOnInit(): void {
  }
  fruitdetail= {
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
  
  

  vegShow(name,price,img){
    this.fruitdetail.Name = name;
    this.fruitdetail.Price=price;
    this.fruitdetail.img=img;
    
  }
 calculatePrice(event){
  this.fruitdetail.quantity=parseInt(event.target.value);
   this.value=this.fruitdetail.Price*this.fruitdetail.quantity;
  
 }
 async  addtoCart(){
  var cartSave=JSON.parse(localStorage.getItem("cartDetail"));
  if(cartSave==null){
   var cartStore={"name":this.fruitdetail.Name, "price":this.fruitdetail.Price,"quantity":this.fruitdetail.quantity,"value":this.value,"picture":this.fruitdetail.img}
   this.storeCart.push(cartStore);
   localStorage.setItem("cartDetail",JSON.stringify(this.storeCart));
  }
 
  else{
  
  for(var i=0;i<cartSave.length;i++){
    if(cartSave[i].name==this.fruitdetail.Name){
     cartSave[i].quantity=cartSave[i].quantity+this.fruitdetail.quantity;
     cartSave[i].value=cartSave[i].price*cartSave[i].quantity;
     localStorage.setItem("cartDetail",JSON.stringify(cartSave));
     break;
    }
    else{
      if(i==cartSave.length-1){
     var cartStore={"name":this.fruitdetail.Name, "price":this.fruitdetail.Price,"quantity":this.fruitdetail.quantity,"value":this.value,"picture":this.fruitdetail.img}
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
    this.fruitdetail.quantity=0;
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
