import { type } from "os";

export type Empresa = {
    "id": number,
    "nome": string,
    "cnpj": string,
    "cidade": string,
    "estado": string,
    "ramo": string
    }

    export type EmpresaPage = {
        "content": Empresa[];
        "last": boolean;
        "totalElements": number;
        "totalPages": number,
        "size": number;
        "number": number;
        "first": boolean;
        "numberOfElements": number;
        "empty": boolean;
    }