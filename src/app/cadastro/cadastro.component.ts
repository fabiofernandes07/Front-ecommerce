import { UsuarioService } from './../usuario.service';
import { ProductService } from './../products/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  nome:string="";
  sobrenome:any;
  email:any;
  senha:any;
  numTelefone:any;
  genero:any;
  estado:any;
  cidade:any;
  cep:any;
  rua:any;
  numEndereco:any;
  bairro:any;
  complemento:any;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  criarUsuario() {
    this.usuarioService.addUser({
      name:this.nome,
      lastName: this.sobrenome,
      email: this.email,
      secret: this.senha,
      role: 'CLIENTE',
      phone: this.numTelefone,
      gender: this.genero,
      state: this.estado,
      city: this.cidade,
      cep:this.cep,
      street:this.rua,
      number: this.numEndereco,
      district: this.bairro,
      complement: this.complemento
    }).subscribe(data =>{
      console.log(data);
    })
  }

}
