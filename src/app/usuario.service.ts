import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private HttpClient: HttpClient) { }

  addUser(user:any): Observable<any> {
    const baseUrl="http://localhost:8080/api/v1/users";
    return this.HttpClient.post<any>(baseUrl, user);
  }

  addAdress(adress:any): Observable<any> {
    const baseUrl="http://localhost:8080/api/v1/adresses";
    return this.HttpClient.post<any>(baseUrl, adress);
  }

  addSale(sale:any): Observable<any> {
    const baseUrl="http://localhost:8080/api/v1/sales";
    return this.HttpClient.post<any>(baseUrl, sale);
  }

  getSales(saleUser: any): Observable<any> {
    const baseUrl="http://localhost:8080/api/v1/sales?userId="+saleUser;
    return this.HttpClient.get(baseUrl);
  }

  getAllSales() {
    const baseUrl="http://localhost:8080/api/v1/sales";
    return this.HttpClient.get(baseUrl);
  }

  updateTracking(tracking:any,deliveryId:any): Observable<any> {
    const baseUrl="http://localhost:8080/api/v1/sales/"+deliveryId;
    return this.HttpClient.patch<any>(baseUrl,tracking);

  }


}
