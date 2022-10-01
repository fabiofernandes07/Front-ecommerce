import { ValidateMessages } from "src/shared/interfaces/validate-messages";
import { ValidationMessages } from "src/shared/utils/validation-messages";

export class AddProductMessages implements ValidateMessages {
    messages = {
        title: {
            required: 'Título é obrigatório!'
        },
        value: {
            required: 'Preço é obrigatório!'
        },
        categoryId: {
            required: 'Categoria é obrigatória!'
        },
        subCategoryId: {
            required: 'Sub-Categoria é obrigatória!'
        },
        gender: {
            required: 'Gênero é obrigatório!'
        },
        images: {
            required: 'Imagem é obrigatória!'
        }
    };
    getMessages() {
        return Object.assign(new ValidationMessages().getMessages(), this.messages);
    }
}
