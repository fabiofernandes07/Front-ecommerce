import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { SweetalertCustom } from 'src/shared/utils/sweetalert-custom';
import { MSG_SUCCES } from 'src/shared/utils/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormBase } from 'src/shared/utils/form-base';
import { ValidatorsCustom } from 'src/shared/utils/validators-custom';
import { CadastroMessages } from './cadastro.messages';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent extends FormBase implements OnInit {

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {
    super(router, activatedRoute, new CadastroMessages().getMessages());
  }

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.form = this.formBuilder.group({
      nome: new FormControl('', ValidatorsCustom.noWhitespaceValidator),
      sobreNome: new FormControl('', ValidatorsCustom.noWhitespaceValidator),
      email: new FormControl('', [ValidatorsCustom.noWhitespaceValidator, ValidatorsCustom.validEmail]),
      senha: new FormControl('', [ValidatorsCustom.noWhitespaceValidator, ValidatorsCustom.validatePasswordValid]),
      numTelefone: new FormControl('', ValidatorsCustom.noWhitespaceValidator),
      genero: new FormControl(''),
      estado: new FormControl(''),
      cidade: new FormControl(''),
      cep: new FormControl(''),
      rua: new FormControl(''),
      numEndereco: new FormControl(''),
      bairro: new FormControl(''),
      complemento: new FormControl(''),
      ativo: new FormControl(true),
    });
  }

  enableShipping() {
    if (this.form.valid) {
      return true;
    }
    return false;
  }

  criarUsuario() {
    if (!this.enableShipping()) {
      console.log(this.form.value);
      this.usuarioService.addUser({
        name: this.form.value.nome,
        lastName: this.form.value.sobreNome,
        email: this.form.value.email,
        secret: this.form.value.senha,
        role: 'CLIENTE',
        phone: this.form.value.numTelefone,
        gender: this.form.value.genero,
        state: this.form.value.estado,
        city: this.form.value.cidade,
        cep: this.form.value.cep,
        street: this.form.value.rua,
        number: this.form.value.numEndereco,
        district: this.form.value.bairro,
        complement: this.form.value.complemento
      }).subscribe(
        () => {
          SweetalertCustom.showAlertTimer('success', MSG_SUCCES).then(() => {
            this.router.navigate(['/']);
          });
        }
      );
    }
  }
}
