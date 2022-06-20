import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getCart();
    this.products.map((a:any)=>{
      this.grandTotal += a.total;
    });
  }

  removeCartItem(product:any) {
    this.cartService.removeCartItem(product)
    this.products = this.cartService.getCart();
    this.grandTotal = 0;
    this.products.map((a:any)=>{
      this.grandTotal += a.total;
    });
  }


  emptycart(){
    window.location.replace("/products");
    this.products = []
    localStorage.setItem("cart",JSON.stringify(this.products));
  }
}
