export class BadRequest extends Error {
    constructor(message = 'Requisição inválida') {
        super(message);
    }
}

export class InternalError extends Error {
        constructor(message = 'Erro no servidor.') {
            super(message);
        }
}

export class NotAuthorized extends Error {
    constructor(message = 'Usuário não autorizado.') {
        super(message);
    }
}

export class Forbidden extends Error {
    constructor(message = 'Erro no envio de dados para aplicação.') {
        super(message);
    }
}