import { ValidateMessages } from "src/shared/interfaces/validate-messages";
import { ValidationMessages } from "src/shared/utils/validation-messages";


export class CadastroMessages implements ValidateMessages {
    messages = {
        cep: {
            required: 'CEP é obrigatório.'
        },
    };
    getMessages() {
        return Object.assign(new ValidationMessages().getMessages(), this.messages);
    }
}
