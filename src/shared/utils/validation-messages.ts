import { ValidateMessages } from "src/shared/interfaces/validate-messages";

export class ValidationMessages implements ValidateMessages {

  messages = {
    login: {
      required: 'Login é obrigatório..',
      cpfInvalid: 'Login é inválido.'
    },
    password: {
      required: 'Senha é obrigatória.',
    },
    senha: {
      required: 'Senha é obrigatória.',
      passwordNotMatch: 'Senhas não se correspondem.',
      passwordInvalid: 'A senha precisa ter pelo menos um número, um caractere e no mínimo 6 caracteres.'
    },
    name: {
      required: 'Nome é obrigatório.',
    },
    nome: {
      required: 'Nome é obrigatório.',
    },
    cpf: {
      required: 'CPF é obrigatório.',
      cpfInvalid: 'CPF inválido.'
    },
    descricao: {
      required: 'Descrição é obrigatória.',
    },
    email: {
      required: 'E-mail é obrigatório.',
      emailInvalid: 'E-mail é inválido.'
    },
    sobreNome: {
      required: 'Sobrenome é obrigatório.',
    },
    telefone: {
      required: 'Telefone é obrigatório.',
      phoneInvalid: 'Telefone é inválido.'
    },
    perfilId: {
      required: 'Perfil é obrigatório.',
    },
    departamentoId: {
      required: 'Departamento é obrigatório.',
    },
  };

  getMessages() {
    return this.messages;
  }
}
