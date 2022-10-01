import { Component, OnInit } from '@angular/core';
import { SweetalertCustom } from 'src/shared/utils/sweetalert-custom';
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
    this.load();
  }

  login(form: any) {
    this.email = form.value.emailInput;
    this.password = form.value.passwordInput;
    this.loginService.login({ email: this.email, password: this.password }).subscribe(
      data => {
        this.user = data
        localStorage.setItem('cart', JSON.stringify([]));
        localStorage.setItem('user', JSON.stringify(this.user));
        sessionStorage.refresh = 'true'
        window.location.replace("/products");
      },
      () => {
        SweetalertCustom.showAlertConfirm('error', "Usuário ou senha incorreto!");
      });
  }

  load() {
    //Session storage salva os dados como string
    (sessionStorage.refresh == 'true' || !sessionStorage.refresh) && location.reload();
    sessionStorage.refresh = false;
  }

}
