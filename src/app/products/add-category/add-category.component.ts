import { Category } from './../../site-layout/categories';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  Category: string = "";

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
  }

  AddCategory(category: any ) {
    console.log(category);
    this.Category  = category;

    this.productService.createCategory({description: this.Category}).subscribe(data =>{
        window.location.reload();
      })
  }

}
