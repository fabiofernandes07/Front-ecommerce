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
  adm: boolean = true;
  role: any;
  id: any;
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    const role = JSON.parse(localStorage.getItem('user') || JSON.stringify({ user: { role: "" } })).user.role;
    this.role = role;
    this.productsService.getCategory().subscribe(async data => {
      this.categoryList = data;

      this.categoryList = await Promise.all(this.categoryList.map(async (categ: any) => {
        this.subCategoryList = await this.productsService.getSubCategory(categ.id).toPromise()
        return {
          ...categ, subCategs: this.subCategoryList
        }
      }))
    })
  }
}
