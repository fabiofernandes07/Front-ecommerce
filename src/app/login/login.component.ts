import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: any;
  public password: any;
  public user: any;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  login(form: any) {
    this.email = form.value.emailInput;
    this.password = form.value.passwordInput;
    this.loginService.login({ email: this.email, password: this.password }).subscribe(data => {
      this.user = data
      localStorage.setItem('cart', JSON.stringify([]));
      localStorage.setItem('user', JSON.stringify(this.user));
      window.location.replace("/products");
    });
  }

}
