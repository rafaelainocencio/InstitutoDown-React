import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <header>
            <nav className="container navbar navbar-expand-lg navbar-light ">
                <Link className="nav-item nav-link" to="/">
                    Instituto Down
                </Link>
                <div className='opcoes'>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">

                            <Link className="nav-item nav-link" to="/livros">
                                Ebooks
                            </Link>

                            <Link className="nav-item nav-link" to="/vagas">
                                Vagas
                            </Link>

                            <Link className="nav-item nav-link" to="/candidatatura">
                                Candidatar
                            </Link>
    
                            {/* <Link className="nav-item nav-link" to="/crud">
                                CRUD
                            </Link> */}

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}