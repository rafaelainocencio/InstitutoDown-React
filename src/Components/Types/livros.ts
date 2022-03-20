import { type } from "os";

export type Livro = {
    "id": number,
    "nome": string,
    "descricao": string,
    "imagem": string
}

export type LivroPage = {
    "content": Livro[];
    "last": boolean;
    "totalElements": number;
    "totalPages": number,
    "size": number;
    "number": number;
    "first": boolean;
    "numberOfElements": number;
    "empty": boolean;
}
