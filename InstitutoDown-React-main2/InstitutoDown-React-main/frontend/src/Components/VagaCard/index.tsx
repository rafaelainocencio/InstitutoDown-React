

import { Vaga } from "../../Components/Types/vagas";

type Props = {
    Vaga: Vaga;
}

function VagaCard({ Vaga}: Props) {



     const rota = `/vagas/candidatura/${Vaga.id}`

   
    return (
        <div className="card text-center m-3">
            <div className="card-header nomeVaga">
                <h1>{Vaga.nome}</h1>
            </div>
            <div className="card-body">
                <h3>{Vaga.empresa.nome}</h3>
                <p className="card-text">{Vaga.descricao}</p>
                <p>{Vaga.cargaHoraria}</p>
                <p>{Vaga.salario}</p>
                    <button className="btn btn-primary" >Candidatar</button>
            </div>
        </div>
    );
}

export default VagaCard;