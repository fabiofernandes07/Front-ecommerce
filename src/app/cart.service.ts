import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([]);
  public teste = ""

  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product : any) {
    // if(this.cartItemList.length == 0) {
    //   console.log("add");
    //   this.cartItemList = localStorage.getItem("cart");
    // }
    this.cartItemList = JSON.parse(localStorage.getItem("cart") || '')
    console.log(product)
    const alreadyExist = this.cartItemList.filter((item: any) => {
      if(item.id === product.id){
        item.quantity += 1;
        item.total = item.value * item.quantity;
      }
      return item.id === product.id
    });
    console.log(alreadyExist);
    if(alreadyExist.length === 0){
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);  
    }
    this.getTotalPrice()

    console.log(localStorage.getItem("cart"))
    localStorage.setItem("cart",JSON.stringify(this.cartItemList));
    console.log(localStorage.getItem("cart"))
    
    
  }

  getTotalPrice() :number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removeCartItem(product:any) {
    this.cartItemList = localStorage.getItem("cart");
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  getCart() {
    if(localStorage.getItem("cart")){
      this.cartItemList = localStorage.getItem("cart");

    return this.cartItemList
    }
  }

}
