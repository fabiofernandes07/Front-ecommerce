import { ValidateMessages } from "src/shared/interfaces/validate-messages";
import { ValidationMessages } from "src/shared/utils/validation-messages";

export class AddSubCategoryMessages implements ValidateMessages {
    messages = {
        categoria: {
            required: 'Categoria é obrigatória!'
        },
        subCategoria: {
            required: 'SubCategoria é obrigatória!'
        },
    };
    getMessages() {
        return Object.assign(new ValidationMessages().getMessages(), this.messages);
    }
}
