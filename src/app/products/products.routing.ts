import { Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';

export const PRODUCTS_ROUTES: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'add-subcategory', component: AddSubCategoryComponent },
  // {path : 'list-product', component: ViewAllProductComponent},
  { path: 'category/:id', component: ViewProductByCategoryComponent },
  { path: 'search-product-name', component: ViewProductByDateComponent },
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'view-product/:id', component: ViewProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
];