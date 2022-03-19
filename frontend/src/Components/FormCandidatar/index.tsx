import { type } from "os";
import { useNavigate } from "react-router-dom";
import { Candidatura, CandidaturaPage } from "../Types/candidaturas";


type Props = {
    Candidatura: Candidatura
    CanditaduraPage: CandidaturaPage
    id: string
}

export default function FormCandidatar({Candidatura}: Props){
    
    const navigate = useNavigate();

    return(
        <div className="container formContainer">
            <form action="">
                <h2>Vaga: nome da vaga aqui</h2>
            </form>
        </div>
    )

    
}