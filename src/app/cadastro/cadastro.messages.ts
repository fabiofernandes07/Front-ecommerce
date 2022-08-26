import { ValidateMessages } from "src/shared/interfaces/validate-messages";
import { ValidationMessages } from "src/shared/utils/validation-messages";


export class CadastroMessages implements ValidateMessages {
    messages = {
        // nome: {
        //     required: 'Nome é obrigatório.'
        // },
        // sobreNome: {
        //     required: 'Sobrenome é obrigatório.'
        // },
        // email: {
        //     required: 'E-mail é obrigatório.',
        //     emailInvalid: 'E-mail é inválido.'
        // },
        senha: {
            required: 'Senha é obrigatória.',
            passwordInvalid: 'Senha é inválida.'
        },
        numTelefone: {
            phoneInvalid: 'Telefone é inválido.'
        }
    };
    getMessages() {
        return Object.assign(new ValidationMessages().getMessages(), this.messages);
    }
}
