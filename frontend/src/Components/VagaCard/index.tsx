import { Link } from "react-router-dom";
import { Vaga } from "../../Components/Types/vagas";

type Props = {
    Vaga: Vaga;
}

function VagaCard({ Vaga }: Props) {

    const rota = `/vagas/candidatar/${Vaga.id}`

    return (
        <div className="card text-center m-3">
            <div className="card-header">
                <h1>{Vaga.nome}</h1>
            </div>
            <div className="card-body">
                <h3>{Vaga.empresa.nome}</h3>
                <p className="card-text">{Vaga.descricao}</p>
                <p>{Vaga.cargaHoraria}</p>
                <p>{Vaga.salario}</p>
                <Link to={rota}>
                    <button className="btn btn-primary" >Candidatar</button>
                </Link>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>
    );
}

export default VagaCard;