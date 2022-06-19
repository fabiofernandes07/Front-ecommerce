import { CartService } from './../../cart.service';
import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from './../../site-layout/categories';
import { Product } from '../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.scss']
})
export class ViewProductByCategoryComponent implements OnInit {
  searchCategory:any;
  productList:any;

  constructor( private activatedRoute: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.searchCategory = data.id;
      // console.log(this.searchCategory);

      this.productService.searchCategoryProduct(this.searchCategory).subscribe(categoryData => {
        this.productList = categoryData;
        // console.log(this.productList);

        this.productList.forEach((a:any) => {
          Object.assign(a,{quantity:1,total:a.value});
        });

      })
    })
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}
