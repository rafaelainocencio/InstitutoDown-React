import { type } from "os";

export type Candidatura = {
    "id": number,
    "usuario": {
        "id": number,
        "nome": string,
        "telefone": string,
        "email": string,
        "cidade": string,
        "estado": string
    },
    "vaga": {
        "id": number,
        "nome": string,
        "descricao": string,
        "salario": number,
        "cargaHoraria": string
    }
}

export type CandidaturaPage = {
    "content": Candidatura[];
    "last": boolean;
    "totalElements": number;
    "totalPages": number,
    "size": number;
    "number": number;
    "first": boolean;
    "numberOfElements": number;
    "empty": boolean;
}