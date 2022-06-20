import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HttpClient: HttpClient) { }

  login(user:any): Observable<any> {
    const baseUrl="http://localhost:8080/api/v1/auth";
    return this.HttpClient.post<any>(baseUrl, user);
  }
}
