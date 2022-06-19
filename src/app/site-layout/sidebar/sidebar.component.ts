import { Category } from './../categories';
import { ProductService } from './../../products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categoryList: any;
  subCategoryList: any;
  adm : boolean = true;
  id: any;
  constructor(private productsService : ProductService) { }

  ngOnInit(): void {
    this.productsService.getCategory().subscribe(async data =>{
      this.categoryList = data;

      this.categoryList = await Promise.all(this.categoryList.map(async(categ:any)=>{
        this.subCategoryList = await this.productsService.getSubCategory(categ.id).toPromise()
        // console.log(this.subCategoryList)
        return {
          ...categ,subCategs:this.subCategoryList
        }
      }))
      // console.log(this.categoryList);

    })
  }

}
