import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.scss']
})
export class AddSubCategoryComponent implements OnInit {
  categoryList : any;
  categoryId: any;
  categoryDescription: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getCategory().subscribe(async data =>{
      this.categoryList = data;
   });
  }

  AddSubCategory() {
  this.productService.createSubCategory({categoryId:Number(this.categoryId),description:this.categoryDescription}).subscribe(data => {
    console.log(data);
    window.location.reload()
  })
  }

  getCateg(event: any) {

  }
}
