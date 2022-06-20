import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Category } from '../site-layout/categories';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HttpClient: HttpClient) { }

  createProduct(productBody: any): Observable<Product> {
    const baseUrl="http://localhost:8080/api/v1/products";
    return this.HttpClient.post<Product>(baseUrl, productBody);
  }
  viewProduct(): Observable<Product> {
    const baseUrl="http://localhost:8080/api/v1/products";
    return this.HttpClient.get<Product>(baseUrl);
  }
  updateProduct(productId: any, productBody: any): Observable<Product> {
    const baseUrl="http://localhost:3000/product/"+productId;
    return this.HttpClient.put<Product>(baseUrl,  productBody);
  }
  deleteProduct(productId: any): Observable<Product> {
    const baseUrl="http://localhost:3000/product/"+productId;
    return this.HttpClient.delete<Product>(baseUrl);
  }
  searchCategoryProduct(categoryId: any): Observable<Product> {
    const baseUrl="http://localhost:8080/api/v1/products?subCategoryId="+categoryId;
    return this.HttpClient.get<Product>(baseUrl);
  }
  searchSubCategoryProduct(categoryId: any): Observable<Product>{
    const baseUrl="http://localhost:8080/api/v1/sub-categories/"+categoryId;
    return this.HttpClient.get<Product>(baseUrl);
  }
  Product(categoryId: any): Observable<Product> {
    const baseUrl="http://localhost:8080/api/v1/products/"+categoryId;
    return this.HttpClient.get<Product>(baseUrl);
  }

  getProductByName(name:any ): Observable<Product>{
    const baseUrl="http://localhost:8080/api/v1/products?title="+name;
    return this.HttpClient.get<Product>(baseUrl);
  }
  
  searchDateProduct(dateParam: any): Observable<Product> {
    const baseUrl="http://localhost:3000/product/date="+dateParam;
    return this.HttpClient.get<Product>(baseUrl);
  }

  createCategory(category :any):  Observable<Category>{
    const categoryUrl="http://localhost:8080/api/v1/categories";
    return this.HttpClient.post<Category>(categoryUrl, category);
  }

  getCategory(){
    const categoryUrl="http://localhost:8080/api/v1/categories";
    return this.HttpClient.get<Category>(categoryUrl);
  }

  createSubCategory(subCateg:any): Observable<any> {
    const subCategoryUrl="http://localhost:8080/api/v1/sub-categories/"
    return this.HttpClient.post<any>(subCategoryUrl,subCateg);
  }

  getSubCategory(categoryId: any) {
    const subCategoryUrl="http://localhost:8080/api/v1/sub-categories/"+categoryId;
    return this.HttpClient.get(subCategoryUrl);
  }

  getSize(){
    const SizeUrl="http://localhost:8080/api/v1/sizes"
    return this.HttpClient.get(SizeUrl);
  }
}

