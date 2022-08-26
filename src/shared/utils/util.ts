import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ErrorMessage } from '../models/error-message.model';

export class Util {
  /**
   * Função para setar os errors da requisição conforme de acordo com os seus tipos
   * @param errorMessage Objeto utilizado para incluir os erros
   * @param error Objeto que vem o HttpErroResponse
   * @param typeErr String para setar qual o tipo de error ex: danger, success, warning, info
   * @param errorCustom Boolean para caso queira inserir uma mensagem sem ser pelo tipo do erro da requisição
   */
  static setErrorMessage(
    errorMessage: ErrorMessage,
    error,
    typeErr = 'danger',
    errorCustom = false
  ) {
    if (errorCustom) {
      errorMessage.errorType = typeErr;
      errorMessage.existError = true;
      errorMessage.errorList = this.setErrorList(error);
    }

    if (!errorCustom && error.status === 400) {
      errorMessage.errorType = typeErr;
      errorMessage.existError = true;
      errorMessage.errorList = this.setErrorList(error);
    }

    if (!errorCustom && error.status === 403) {
      errorMessage.errorType = 'warning';
      errorMessage.existError = true;
      errorMessage.errorList.push('Usuário não tem permissão de acesso!');
    }

    if (!errorCustom && error.status === 0 || error.status === 404) {
      errorMessage.errorType = 'warning';
      errorMessage.existError = true;
      errorMessage.errorList.push('Oopss ocorreu um erro ao processar o seu pedido, não conseguimos conectar com os nossos serviços, por favor tente novamente!');
    }

    setTimeout(() => {
      this.clearErrorMessage(errorMessage);
    }, 10000);
  }

  static setErrorMessageCustom(errorMessage: ErrorMessage, error: any, typeErr = 'danger', timeoutClearMessage = 30000) {

    errorMessage.errorType = typeErr;
    errorMessage.existError = true;
    errorMessage.errorList = this.setErrorListCustom(error);

    setTimeout(() => {
      this.clearErrorMessage(errorMessage);
    }, timeoutClearMessage);
  }

  /**
   * Função para Limpar Objeto utilizado para incluir os erros
   * @param errorMessage Objeto utilizado para incluir os erros
   */
  static clearErrorMessage(errorMessage: ErrorMessage) {
    errorMessage.errorType = '';
    errorMessage.existError = false;
    errorMessage.errorList = [];
  }

  /**
   * Função utilizada para setar os errors na lista de acordo com a requisição
   * @param error Objeto que vem o HttpErroResponse
   */
  static setErrorList(error) {
    let list = [];
    Array.isArray(error.error.errors) ? list = error.error.errors : list.push(error.error.errors);
    return list;
  }

  /**
   * Função utilizada para setar os errors na lista custumizada de acordo com a requisição
   * @param error Objeto que vem o HttpErroResponse
   */
  static setErrorListCustom(error) {
    let list = [];
    Array.isArray(error) ? list = error : list.push(error);
    return list;
  }

  /**
   * Função para alterar o valor do botão de Buscar
   * @param buttonSubmitConfig Objeto para configuração do botão
   * @param isResp Controle a submissão do botão
   */
  static setBtnFilterReq(buttonSubmitConfig?, isResp = false) {
    if (buttonSubmitConfig) {
      buttonSubmitConfig.buttonText = !isResp ? 'Buscando' : 'Buscar';
      buttonSubmitConfig.buttonSubmited = !isResp;
    }
  }

  /**
   * Função para alterar o valor do botão de Submissão
   * @param buttonSubmitConfig Objeto para configuração do submissão
   * * @param isResp Controle a submissão do botão
   */
  static setBtnSubmitReq(buttonSubmitConfig?, isResp = false) {
    if (buttonSubmitConfig) {
      buttonSubmitConfig.buttonText = !isResp ? 'Salvando' : 'Salvar';
      buttonSubmitConfig.buttonSubmited = !isResp;
    }
  }

  /**
   * Função para alterar o valor do botão de Submissão
   * @param buttonSubmitConfig Objeto para configuração do submissão
   * * @param isResp Controle a submissão do botão
   */
  static setBtnSubmitReqCustom(buttonSubmitConfig?, isResp = false, desc1 = '', desc2 = '') {
    if (buttonSubmitConfig) {
      buttonSubmitConfig.buttonText = !isResp ? desc2 : desc1;
      buttonSubmitConfig.buttonSubmited = !isResp;
    }
  }

  /**
   * Função para setar a classe de erro no campo
   * @param formGroup FormGroup do parametro
   * @param messageDisplay Mensagem a ser exibida
   * @param field Campo que receberá a mensagem de validação
   */
  static setErrorsValidate(formGroup: FormGroup, messageDisplay, field: string) {
    if (messageDisplay[field]) {
      return 'is-invalid';
    }
  }

  /**
   * Função para preencher os valores pelo ID
   * @param resp variavel que vem os dados da requisição
   * @param formGroup variavel que traz o form group
   */
  static patchValueForm(obj: any, formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      if (obj[key] || typeof obj[key] === 'boolean') {
        formGroup.controls[key].patchValue(obj[key]);
      }
    });
  }

  static patchDateValueForm(date: Date, formControl: AbstractControl) {
    if (!date || !formControl) {
      return;
    }

    const formatedDate = moment(date).format('YYYY-MM-DD');
    formControl.patchValue(formatedDate);
  }

  /**
   * Retorna URLSearchParams
   */
  static createFilter() {
    const params = new URLSearchParams();
    return params;
  }

  /**
   * Retorna URLSearchParams com o parametro de "Ativo" com o valor "true"
   */
  static createFilterStatusActive() {
    const params = new URLSearchParams();
    params.append('ativo', 'true');
    return params;
  }

  /**
   * Remove os acentos da string
   * @param str string para ser removida os acentos
   */
  static removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  /**
   * Capitaliza a string, deixando a primeira letra maiuscula ( P/ uma palavra)
   * @param str string fonte: Ex.: caSA
   * @returns retorna a string final: Ex.: Casa
   */
  static toCapitalize(str: string) {
    const firstLetter = str.charAt(0).toUpperCase;
    const remaining = str.slice(1).toLowerCase();
    return firstLetter + remaining;
  }

  /**
   * Limpa todos os campo do form
   * @param formGroup O form a ser limpo os campos
   */
  static clearFields(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      const control = formGroup.get(campo);
      if (control instanceof FormGroup || control instanceof FormControl) {
        if (control instanceof FormGroup) {
          this.clearFields(control);
        } else {
          if (Array.isArray(control.value)) {
            control.setValue([]);
          } else {
            control.setValue('');
          }
        }
      } else if (control instanceof FormArray) {
        control.controls.splice(0);
        control.updateValueAndValidity();
      }
    });
    formGroup.updateValueAndValidity();
  }

  /**
   * Cria as query params do filtro de busca
   * @param param Objero a ser convertido em parametros
   */
  static getQueryParams(param: object) {
    const params: URLSearchParams = new URLSearchParams();

    Object.keys(param).forEach(campo => {
      const item = param[campo];
      if (item) {
        params.append(campo, item);
      }
    });

    return params;
  }

  /**
   * Obtem os campos invalidos do form
   * @param form Form a ser verificado
   */
  static catchFieldsInvalids(form: FormGroup | FormArray): string[] {
    const invalidControls: string[] = [];

    const recursiveFunc = (formGP: FormGroup | FormArray) => {
      Object.keys(formGP.controls).forEach(field => {
        const control = formGP.get(field);
        if (control instanceof FormGroup) {
          recursiveFunc(control);
        } else if (control instanceof FormArray) {
          recursiveFunc(control);
        } else {
          if (control.invalid) { invalidControls.push(field); }
        }
      });
    };
    recursiveFunc(form);
    return invalidControls;
  }

  /**
   * * Abre o modal no tamanho
   * @param modalService Serviço do modal
   * @param component O componente a ser aberto
   * @param size O tamanho do modal (lg, xl, sm) / Valor defaul md
   */
  static openModal(modalService: NgbModal, component: any, size: string = 'md') {
    const modalRef = modalService.open(component,
      { backdrop: 'static', size, keyboard: false, windowClass: 'modal-custom-' + size }
    );

    return modalRef;
  }

  static getListYear(): any[] {
    const yearToday = new Date().getFullYear();
    const range = [];
    range.push(yearToday);
    for (let i = 1; i < 12; i++) {
      range.push(yearToday - i);
    }
    return range;
  }

  static toBoolean(param: any) {
    if (typeof param === 'boolean') {
      return param;
    } else {
      switch (param) {
        case 'true':
          return true;
        case 'false':
          return false;
        default:
          return param;
      }
    }
  }

  /**
   * Retorna o CPF ou CNPJ sem Máscara
   */
  static removeCpfCnpjMask(param: any) {

    return param.replaceAll('.', '').replaceAll('-', '').replaceAll('/', '');

  }

  /**
   * 
   * @param cpfCnpjValue valor do cpj ou do cnpj
   * @returns máscara para cpf ou cnpj de acordo com a quantidade de caracteres
   */
  static setCpfOrCnpjMask(cpfCnpjValue: any) {

    if (cpfCnpjValue.length <= 11) {

      return '000.000.000-000';
    }

    return '00.000.000/0000-00';
  }

  static removeContatoMask(param: any) {
    return param.replaceAll(' ', '').replaceAll('(', '').replaceAll(')', '').replaceAll('-', '');
  }
}
