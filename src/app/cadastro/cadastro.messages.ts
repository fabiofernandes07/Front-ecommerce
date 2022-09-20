import { ValidateMessages } from "src/shared/interfaces/validate-messages";
import { ValidationMessages } from "src/shared/utils/validation-messages";

export class CadastroMessages implements ValidateMessages {
    messages = {
        genero: {
            required: 'Género é obrigatório!'
        },
        cep: {
            required: 'CEP é obrigatório!'
        },
        estado: {
            required: 'Estado é obrigatório!'
        },
        cidade: {
            required: 'Cidade é obrigatório!'
        },
        rua: {
            required: 'Rua é obrigatório!'
        },
        numEndereco: {
            required: 'Número é obrigatório!'
        },
        bairro: {
            required: 'Bairro é obrigatório!'
        },
    };
    getMessages() {
        return Object.assign(new ValidationMessages().getMessages(), this.messages);
    }
}
