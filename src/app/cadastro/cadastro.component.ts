import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { SweetalertCustom } from 'src/shared/utils/sweetalert-custom';
import { MSG_SUCCES } from 'src/shared/utils/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  nome: string = "";
  sobrenome: any;
  email: any;
  senha: any;
  numTelefone: any;
  genero: any;
  estado: any;
  cidade: any;
  cep: any;
  rua: any;
  numEndereco: any;
  bairro: any;
  complemento: any;

  constructor(
    public router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  criarUsuario() {
    this.usuarioService.addUser({
      name: this.nome,
      lastName: this.sobrenome,
      email: this.email,
      secret: this.senha,
      role: 'CLIENTE',
      phone: this.numTelefone,
      gender: this.genero,
      state: this.estado,
      city: this.cidade,
      cep: this.cep,
      street: this.rua,
      number: this.numEndereco,
      district: this.bairro,
      complement: this.complemento
    }).subscribe(
      () => {
        SweetalertCustom.showAlertTimer('success', MSG_SUCCES).then(() => {
          this.router.navigate(['/']);
        });
      }
    );
  }

}
