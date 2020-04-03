export class BadRequest extends Error {
    constructor(message = '400 - Requisição inválida') {
        super(message);
    }
}

export class InternalError extends Error {
        constructor(message = '500 - Erro no servidor.') {
            super(message);
        }
}

export class NotAuthorized extends Error {
    constructor(message = '401 - Usuário não autorizado.') {
        super(message);
    }
}

export class Forbidden extends Error {
    constructor(message = '403 - Erro no envio de dados para aplicação.') {
        super(message);
    }
}