import { AbstractControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { Util } from './util';

export class ValidatorsCustom {

    static noWhitespaceValidator(control: AbstractControl) {
        let field = control.value;
        if (!field) { return { required: true }; }
        field = field.toString().trim();
        if (!field) { return { required: true }; }
        return null;
    }

    /**
     * Verifica se o CPF é valido
     * @param control Campo a ser validado
     */
    static validCpf(control: AbstractControl) {

        let cpf = control.value;
        if (!cpf) { return null; }
        cpf = cpf.toString().trim();
        if (!cpf) { return null; }

        let soma = 0;
        let resto;

        if (
            cpf === '00000000000' ||
            cpf === '11111111111' ||
            cpf === '22222222222' ||
            cpf === '33333333333' ||
            cpf === '44444444444' ||
            cpf === '55555555555' ||
            cpf === '66666666666' ||
            cpf === '77777777777' ||
            cpf === '88888888888' ||
            cpf === '99999999999') {
            return { cpfInvalid: true };
        }

        for (let i = 1; i <= 9; i++) {
            soma = soma + Number(cpf.substring(i - 1, i)) * (11 - i);
        }

        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }

        if (resto !== Number(cpf.substring(9, 10))) {
            return { cpfInvalid: true };
        }

        soma = 0;

        for (let i = 1; i <= 10; i++) {
            soma = soma + Number(cpf.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }

        if (resto !== Number(cpf.substring(10, 11))) {
            return { cpfInvalid: true };
        }

        return null;
    }

    /**
     * Verifica se o CNPJ é valido
     * @param control Campo a ser validado
     */
    static validCnpj(control: AbstractControl) {
        const cnpj = control.value.trim();

        if (!cnpj) { return null; }

        if (cnpj.length !== 14) {
            return { cnpjInvalid: true };
        }

        if (cnpj === '00000000000000' ||
            cnpj === '11111111111111' ||
            cnpj === '22222222222222' ||
            cnpj === '33333333333333' ||
            cnpj === '44444444444444' ||
            cnpj === '55555555555555' ||
            cnpj === '66666666666666' ||
            cnpj === '77777777777777' ||
            cnpj === '88888888888888' ||
            cnpj === '99999999999999') {
            return { cnpjInvalid: true };
        }

        let tamanho = cnpj.length - 2;
        let numeros = cnpj.substring(0, tamanho);
        const digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;

        for (let i = tamanho; i >= 1; i--) {
            soma += Number(numeros.charAt(tamanho - i)) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }

        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

        if (resultado !== Number(digitos.charAt(0))) {
            return { cnpjInvalid: true };
        }

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;

        for (let i = tamanho; i >= 1; i--) {
            soma += Number(numeros.charAt(tamanho - i)) * pos--;
            if (pos < 2) {
                pos = 9;
            }
        }

        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado !== Number(digitos.charAt(1))) {
            return { cnpjInvalid: true };
        }

        return null;
    }

    /**
     * Verifica se o CPF ou CNPJ é valido
     * @param control Campo a ser validado
     */
    static validCpfOrCnpj(control: AbstractControl) {

        let value = control.value;
        if (!value) { return null; }

        value = value.toString().trim();
        if (!value) { return null; }

        value = Util.removeCpfCnpjMask(value);

        if (value.length <= 11) {
            return ValidatorsCustom.validCpf(control);
        }

        if (value.length > 11) {
            return ValidatorsCustom.validCnpj(control);
        }

        return null;
    }

    /**
     * Verifica se o e-mail é valido
     * @param control Campo a ser validado
     */
    static validEmail(control: AbstractControl) {
        const email = control.value.trim();
        const regexP = /[a-zA-Z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/g;

        if (email && !regexP.test(email)) {
            return { emailInvalid: true };
        }
        return null;
    }

    /**
     * Verifica se a senha é valido
     * @param control Campo a ser validado
     */
    static validatePasswordValid(control: AbstractControl) {
        const password = control.value.trim();
        const regexP = /^(?=\D*\d)(?=[^a-zA-Z]*[a-zA-Z]).{6,30}$/g;

        if (password && !regexP.test(password)) {
            return { passwordInvalid: true };
        }
        return null;
    }

    /**
     * Verifica se o array está vazio
     * @param control Campo a ser validado
     */
    static arrayLength(control: AbstractControl) {
        const array: any[] = control.value;
        if (array && array.length <= 0) { return { arrayEmpty: true }; }

        return null;
    }

    /**
     * Verifica se a data é inválida
     * @param control Campo a ser validado
     */
    static validDate(control: AbstractControl) {
        if (control.value) {
            if (!moment(control.value).isValid()) {
                return { validDate: true };
            }
        }

        return null;
    }

    /**
     * Verifica se é a data minina
     * @param control Campo a ser validado
     */
    static minDate(control: AbstractControl) {
        if (control.value) {
            const date = new Date(control.value);
            if (moment(date).isValid() && date.getFullYear() < (new Date(0).getFullYear() - 69)) {
                return { minDate: true };
            }
        }

        return null;
    }

    /**
     * Verifica se a data é superior a data atual
     * @param control Campo a ser validado
     */
    static higherDate(control: AbstractControl) {
        const currentDate = new Date();
        const date = new Date(control.value);

        if (moment(date).isValid() && currentDate < date) {
            return { higherDate: true };
        }

        return null;
    }

    /**
     * Valida o número do telefone/celular
     * @param control Campo a ser validado
     */
    static validPhone(control: AbstractControl) {
        const phone: string = control.value.trim();
        if (phone && (phone.length < 10 || phone.length > 11)) {
            return { phoneInvalid: true };
        }

        return null;
    }

    /**
     * Validação para ver se a data final é maior que a data inicial
     * @param initialDateName Data Inicial
     * @param finalDateName Data Final
     */
    static dateBiggerCurrent(initialDateName: string, finalDateName: string) {
        return (group: FormGroup): { [key: string]: any } => {
            const initalDate = group.controls[initialDateName];
            const finalDate = group.controls[finalDateName];
            if (initalDate.value && finalDate.value) {

                if (initalDate.value && finalDate.value && (initalDate.value > finalDate.value)) {
                    initalDate.setErrors({ dateBiggerCurrent: true });
                    finalDate.setErrors({ dateBiggerCurrent: true });
                    return { dateBiggerCurrent: true };
                } else {
                    initalDate.setErrors(null);
                    finalDate.setErrors(null);
                }
            }

            return null;
        };
    }

    /**
     * Validação para ver se a data final é maior que a data inicial
     * @param initialDateName Data Inicial
     * @param finalDateName Data Final
     */
    static sevenDayBreak(initialDateName: string, finalDateName: string) {
        return (group: FormGroup): { [key: string]: any } => {
            const initalDate = group.controls[initialDateName];
            const finalDate = group.controls[finalDateName];

            if (initalDate.value && finalDate.value) {
                const initalDateMoment = moment(initalDate.value);
                const finalDateMoment = moment(finalDate.value);
                if (initalDate.value && finalDate.value && (initalDate.value <= finalDate.value) && (finalDateMoment.diff(initalDateMoment, 'days') > 7)) {
                    initalDate.setErrors({ sevenDayBreak: true });
                    finalDate.setErrors({ sevenDayBreak: true });
                    return { sevenDayBreak: true };
                } else {
                    initalDate.setErrors(null);
                    finalDate.setErrors(null);
                }
            }

            return null;
        };
    }

    /**
     * Verifica se o ano é valido
     * @param control Campo a ser validado
     */
    static validYear(control: AbstractControl) {
        const year = control.value;

        if (year) {
            if (year.toString().length !== 4 || year < 1950 || year > 2100) {
                return { validYear: true };
            }
        }

        return null;
    }
}
