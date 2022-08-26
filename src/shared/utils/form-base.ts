import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { fromEvent, merge, Observable } from 'rxjs';
import { GenericValidatorForm } from './generic-validator-form';
import { Util } from './util';
import { ValidateMessage } from '../models/validate-message.model';

@Component({
  template: ''
})
export class FormBase implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  nameScreen = '';
  pageId = '';
  validateMessage = new ValidateMessage();
  form: FormGroup;

  private permissionUser;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public validateMessages?: any,
    public permissionsService?: NgxPermissionsService,
  ) { }

  ngOnInit() {
  }

  setPermissionInComponent(permissions: string[], permissionUser: string, redirect = false, cadEdit = false) {
    this.permissionUser = permissionUser;
    const existList = permissions.find(x => x.includes(permissionUser));

    if (!existList && redirect) {
      return this.router.navigate(['/sem-permissao']);
    }

    this.permissionsService.loadPermissions(permissions);
  }

  hiddenComponenteWithAll(permissions: string[]) {
    const existList = permissions.find(x => x.includes(this.permissionUser));

    if (!existList) {
      return false;
    }

    return true;
  }

  ngAfterViewInit(): void {
    this.controlsBlurValidate();
    this.createValidateFields();
  }

  /**
   * Função que realiza a validação por Blur
   */
  controlsBlurValidate() {
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
    merge(...controlBlurs).subscribe(value => {
      this.validateMessage.messageDisplay = this.validateMessage.genericValidator.processMessages(this.form);
    });
  }

  /**
   * Seta a classe de erro no campo
   * @param field Campo a ser realizado a tratativa
   */
  setErrorValidate(field) {
    return Util.setErrorsValidate(this.form, this.validateMessage.messageDisplay, field);
  }

  /**
   * Função que habilita/desabilita o botão de salvar
   * verificando ser o form é valido
   */
  enableShipping() {
    return this.form.valid;
  }

  /**
   * Utilizados no autocomplete
   */
  updateErrors() {
    setTimeout(() => {
      this.validateMessage.messageDisplay = this.validateMessage.genericValidator.processMessages(this.form);
    }, 100);
  }

  /**
   * Mensagens utilizadas na validação
   */
  createValidateFields() {
    this.validateMessage.validationMessages = this.validateMessages ? this.validateMessages : {};
    this.validateMessage.genericValidator = new GenericValidatorForm(this.validateMessage.validationMessages);
  }

  /**
   * Função que força o processamento das mensagens vindo do input child
   */
  forceProcessMessages() {
    this.validateMessage.messageDisplay = this.validateMessage.genericValidator.processMessages(this.form);
  }

}
