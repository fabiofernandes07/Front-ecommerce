import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';


@NgModule({
  declarations: [
    ProductsComponent,
    AddProductComponent,
    ViewProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewAllProductComponent,
    ViewProductByDateComponent,
    ViewProductByCategoryComponent,
    AddCategoryComponent,
    AddSubCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    ProductsComponent,
    AddProductComponent,
    ViewProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewAllProductComponent,
    ViewProductByDateComponent,
    ViewProductByCategoryComponent]
})
export class ProductsModule { }
