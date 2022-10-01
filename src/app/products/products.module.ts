import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { PRODUCTS_ROUTES } from './products.routing';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';

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
    RouterModule.forChild(PRODUCTS_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ]
})
export class ProductsModule { }
