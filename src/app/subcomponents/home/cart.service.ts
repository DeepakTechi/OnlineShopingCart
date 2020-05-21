import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private addcart=new BehaviorSubject("");
  cartobserve=this.addcart.asObservable();
  constructor() { }

  cartfun(cartvalue){

    this.addcart.next(cartvalue)

  }

}
