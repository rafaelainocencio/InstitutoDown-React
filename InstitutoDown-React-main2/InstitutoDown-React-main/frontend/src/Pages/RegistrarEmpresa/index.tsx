import axios, { AxiosRequestConfig } from "axios";
import { Link } from "react-router-dom";
import { Empresa } from "../../Components/Types/empresas";
import { BASE_URL } from "../../Utils/requests";


    type Props = {
        Empresa: Empresa;
    }
    
    function RegistrarEmpresa() {
        
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            
            event.preventDefault();
    
            const nome = (event.target as any).nome.value;
            const cnpj = (event.target as any).cnpj.value;
            const cidade = (event.target as any).cidade.value;
            const estado = (event.target as any).estado.value;
            const ramo = (event.target as any).ramo.value;
    
            window.location.reload()
            
            
    
            const config: AxiosRequestConfig = {
                baseURL: BASE_URL,
                method: 'POST',
                url: '/empresas',
                data:{
                    nome: nome,
                    cnpj: cnpj,
                    cidade: cidade,
                    estado: estado,
                    ramo: ramo
                }
            }    
    
            axios(config).then(response => {
                alert( nome + " foi registrado com sucesso!");    
            });
        }
        
    
        return (
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
                            <label htmlFor="description">Cnpj:</label>
                            <input  className="form-control" id="cnpj" 
                          
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
                        <div className="form-group institutoDown-form-group">
                            <label htmlFor="image">Ramo:</label>
                            <input className="form-control" id="ramo"
                            />
                        </div>
                        <button type="submit"  className="btn btn-primary m-5">Registrar</button>
                    </form>
                    <Link to="/"><button type="button" className="btn btn-primary">Cancelar</button></Link>
                    
                </div>
            </div>)
    }
    
    export default RegistrarEmpresa;