import axios, { AxiosRequestConfig } from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Usuario } from "../../Components/Types/usuarios";
import { BASE_URL } from "../../Utils/requests";
import ImgUsuario from "../../assets/imagens/bubble-gum-recruiter-with-a-magnifying-glass-is-looking-for-new-employees-online.png"


type Props = {
    usuario: Usuario;
}

function RegistrarUsuario() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const nome = (event.target as any).nome.value;
        const telefone = (event.target as any).telefone.value;
        const email = (event.target as any).email.value;
        const cidade = (event.target as any).cidade.value;
        const estado = (event.target as any).estado.value;

        window.location.reload()



        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'POST',
            url: '/usuarios',
            data: {
                nome: nome,
                telefone: telefone,
                email: email,
                cidade: cidade,
                estado: estado
            }
        }

        axios(config).then(response => {
            alert(nome + " você foi registrado com sucesso!");
        });
    }


    return (
        <>
            <h1 className='nome_home'> REGISTRAR <span className='nome_home2'> USUARIO </span> </h1>
            
            <div className="card container mt-5">
                <div className="card-header">
                    Registrar Usuário
                </div>
                <div className="card-body">
                     <form className="adicionar-form-container" onSubmit={handleSubmit} >
                        <div className="form-group institutoDown-form-group">
                            <label htmlFor="formGroupExampleInput">Nome:</label>
                            <input className="form-control" id="nome" 
                  
                            />
                        </div>
                        <div className="form-group institutoDown-form-group">
                            <label htmlFor="description">Telefone:</label>
                            <input  className="form-control" id="telefone" 
                          
                            />
                        </div>
                        <div className="form-group institutoDown-form-group">
                            <label htmlFor="image">Email:</label>
                            <input className="form-control" id="email" 
               
                            />
                        </div>
                        <div className="form-group institutoDown-form-group">
                            <label htmlFor="image">Cidade:</label>
                            <input className="form-control" id="cidade"
                            />
                        </div>
                        <div className="form-group institutoDown-form-group">
                            <label htmlFor="image">Estado:</label>
                            <input className="form-control" id="estado"
                            />
                        </div>
                        <button type="submit"  className="btn btn-primary m-5">Registrar</button>
                    </form>
                    <Link to="/"><button type="button" className="btn btn-primary">Cancelar</button></Link>
                    
                </div>
            </div>

        </>
    )
}

export default RegistrarUsuario;

/* <div className="card container mt-5" >
            <div className="card-header">
                Registrar Usuário
            </div>
            <div className="card-body">
                <form className="adicionar-form-container" onSubmit={handleSubmit} >
                    <div className="form-group institutoDown-form-group">
                        <label htmlFor="formGroupExampleInput">Nome:</label>
                        <input className="form-control" id="nome"

                        />
                    </div>
                    <div className="form-group institutoDown-form-group">
                        <label htmlFor="description">Telefone:</label>
                        <input className="form-control" id="telefone"

                        />
                    </div>
                    <div className="form-group institutoDown-form-group">
                        <label htmlFor="image">Email:</label>
                        <input className="form-control" id="email"

                        />
                    </div>
                    <div className="form-group institutoDown-form-group">
                        <label htmlFor="image">Cidade:</label>
                        <input className="form-control" id="cidade"
                        />
                    </div>
                    <div className="form-group institutoDown-form-group">
                        <label htmlFor="image">Estado:</label>
                        <input className="form-control" id="estado"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary m-5">Registrar</button>
                </form>
                <Link to="/destinos"><button type="button" className="btn btn-primary">Cancelar</button></Link>

            </div>
            <div>
                <figure className="col">
                    <img className="rounded m-2" src={ImgUsuario} width="700" />
                    <figcaption>
                        Illustration by <a href="https://icons8.com/illustrations/author/6101992cfc3ba40007aa1554">Fruzka</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
                    </figcaption>
                </figure>
            </div>
        </div>*/
