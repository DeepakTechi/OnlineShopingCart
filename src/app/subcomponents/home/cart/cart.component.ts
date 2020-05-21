import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  fruitdetail= {
    "Name":"",
    "Price": 0,
    "img":"",
    "quantity":0
  }
  addvalue:any;
  totalValue=0;
  
  

  
  constructor(private cart:CartService) { }

  ngOnInit(): void {
     this.cart.cartobserve.subscribe(c=>this.addvalue=c);
     var addGet= localStorage.getItem("cartDetail");
      this.addvalue=JSON.parse(addGet);
      this.totalPrice();
      }
 countCart(name,flag){
     for(var i=0;i<this.addvalue.length;i++){
      if(this.addvalue[i].name==name){
        if(flag=='sub'){
       this.addvalue[i].quantity=this.addvalue[i].quantity-1;
      
        }
        if(flag=='add'){
       this.addvalue[i].quantity =this.addvalue[i].quantity+1;
        }
        this.addvalue[i].value=this.addvalue[i].price*this.addvalue[i].quantity;
        this.totalPrice();
        
      }
      
      if(this.addvalue[i].quantity==0){
        this.addvalue.splice(i,1);
       
      }
     }
 }
 totalPrice(){
   this.totalValue=0;
   for(var i=0;i<this.addvalue.length;i++){
    this.totalValue=this.totalValue+ this.addvalue[i].value;
   }
  }
 clearCart(){
   localStorage.removeItem("cartDetail");
 }
 
 

}