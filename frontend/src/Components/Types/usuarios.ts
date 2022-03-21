import { type } from "os";

export type Usuario = {
    "id": number,
    "nome": string,
    "telefone": string,
    "email": string,
    "cidade": string,
    "estado": string
    }

    export type UsuarioPage = {
        "content": Usuario[];
        "last": boolean;
        "totalElements": number;
        "totalPages": number,
        "size": number;
        "number": number;
        "first": boolean;
        "numberOfElements": number;
        "empty": boolean;
    }