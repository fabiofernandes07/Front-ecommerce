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
    const baseUrl="http://localhost:3000/product";
    return this.HttpClient.post<Product>(baseUrl, productBody);
  }
  viewProduct(): Observable<Product> {
    const baseUrl="http://localhost:3000/product/";
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
    const baseUrl="http://localhost:3000/product?categoryId="+categoryId;
    return this.HttpClient.get<Product>(baseUrl);
  }
  Product(categoryId: any): Observable<Product> {
    const baseUrl="http://localhost:3000/product/"+categoryId;
    return this.HttpClient.get<Product>(baseUrl);
  }
  searchDateProduct(dateParam: any): Observable<Product> {
    const baseUrl="http://localhost:3000/product/date="+dateParam;
    return this.HttpClient.get<Product>(baseUrl);
  }

  getCategory(){
    const categoryUrl="http://localhost:8080/api/v1/categories";
    return this.HttpClient.get<Category>(categoryUrl);
  }
}

