import { CartService } from './../../cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  searchId:any;
  productData:any;
  quantity:number = 1;

  constructor( private activatedRoute: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.searchId = data.id;

      this.productService.Product(this.searchId).subscribe(categoryData => {
        this.productData = categoryData;
        this.productData = {...this.productData, quantity:1,total:categoryData.price }

      })
    })
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}
