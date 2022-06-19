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

}
