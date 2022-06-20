import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product-by-date',
  templateUrl: './view-product-by-date.component.html',
  styleUrls: ['./view-product-by-date.component.scss']
})
export class ViewProductByDateComponent implements OnInit {
  productList:any;
  search:any
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.search = localStorage.getItem('search');
    console.log(this.search);
    this.productService.getProductByName(this.search).subscribe((data:any)=>{
      console.log(data);
      this.productList = data;
    });
  }

}
