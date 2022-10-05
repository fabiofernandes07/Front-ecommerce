import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { SweetalertCustom } from 'src/shared/utils/sweetalert-custom';
import { MSG_SUCCES } from 'src/shared/utils/constants';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormBase } from 'src/shared/utils/form-base';
import { ValidatorsCustom } from 'src/shared/utils/validators-custom';
import { CadastroMessages } from './cadastro.messages';
import cep from 'cep-promise';

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
      telefone: new FormControl('', [Validators.required, ValidatorsCustom.validPhone]),
      genero: new FormControl('', Validators.required),
      cep: new FormControl('', ValidatorsCustom.noWhitespaceValidator),
      estado: new FormControl('', ValidatorsCustom.noWhitespaceValidator),
      cidade: new FormControl('', ValidatorsCustom.noWhitespaceValidator),
      rua: new FormControl('', ValidatorsCustom.noWhitespaceValidator),
      numEndereco: new FormControl('', ValidatorsCustom.noWhitespaceValidator),
      bairro: new FormControl('', ValidatorsCustom.noWhitespaceValidator),
      complemento: new FormControl(''),
      ativo: new FormControl(true),
    });
  }

  public async onChange(event: number) {
    if (Object.keys(event).length == 8) {
      let returnCep: any;
      await cep(event).then(r => {
        returnCep = r;
      });
      this.form.get('estado').setValue(returnCep.state);
      this.form.get('cidade').setValue(returnCep.city);
      this.form.get('rua').setValue(returnCep.street);
      this.form.get('bairro').setValue(returnCep.neighborhood);
    }
  }

  criarUsuario() {
    if (this.enableShipping()) {
      const payload =
      {
        name: this.form.value.nome,
        lastName: this.form.value.sobreNome,
        email: this.form.value.email,
        secret: this.form.value.senha,
        role: 'CLIENTE',
        phone: this.form.value.telefone,
        gender: this.form.value.genero,
        state: this.form.value.estado,
        city: this.form.value.cidade,
        cep: this.form.value.cep,
        street: this.form.value.rua,
        number: this.form.value.numEndereco,
        district: this.form.value.bairro,
      };
      if (this.form.value.complemento) {
        payload['complement'] = this.form.value.complemento
      }
      this.usuarioService.addUser(payload)
        .subscribe(
          () => {
            SweetalertCustom.showAlertTimer('success', MSG_SUCCES).then(() => {
              this.router.navigate(['/']);
            });
          },
          (error) => {
            SweetalertCustom.showAlertConfirm('error', "E-mail digitado já está em uso!");
          }
        );
    }
  }
}
