import { Livro } from "../Types/livros";


type Props = {
    Livro: Livro;
}

function LivroCard({Livro}:  Props) { 
    return ( 
        <div className="card Livros-card m-5 col-sm-6 col-lg-4 col-xl-3">
            <img className="card-img-top" src={Livro.imagem} alt="Imagem de capa do card" />
            <div className="card-body">
                <h3 className="card-title">{Livro.nome}</h3>
                <p className="card-text">{Livro.descricao}</p>
                <button className="btn btn-primary">Baixar</button>
            </div>
        </div>
    );
}

export default LivroCard;