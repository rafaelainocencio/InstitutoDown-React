import { type } from "os"

export type Vaga = {
    "id": number,
    "nome": string,
    "descricao": string,
    "salario": number,
    "cargaHoraria": string,
    "empresa": {
        "id": number,
        "nome": string,
        "cnpj": string,
        "cidade": string,
        "estado": string,
        "ramo": string
    }
}

export type VagaPage = {
    "content": Vaga[];
    "last": boolean;
    "totalElements": number;
    "totalPages": number,
    "size": number;
    "number": number;
    "first": boolean;
    "numberOfElements": number;
    "empty": boolean;
}