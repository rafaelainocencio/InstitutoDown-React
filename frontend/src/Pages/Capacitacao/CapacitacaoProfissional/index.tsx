import Cap from '../../../assets/imagens/destaque_trabalho.jpg';
import Parc3 from '../../../assets/imagens/movimentoD.jpg'

export default function Capacitacao(){
    return(
        <main>
        <h1 className="titulo_cap"> Capacitação <span className="nome_home2"> Profissional: </span> </h1>

        <div className='principal_qmsm'>
            <div className='img_cap'>
                <picture>
                    <img src={Cap} alt="" />
                </picture>
            </div>

            <div>
                <p className='parag_qmsm'>
                Hoje o Instituto Down oferece 9 e-books: Auxiliar de cozinha, repositor de mercadorias em supermercados e lojas, auxiliar de limpeza, camareira em hotéis, ajudante de produção, mensageiro, secretária, porteiro e telefonista. Para maior absorção do conteúdo, nossos e-books foram preparados por profissionais das áreas de saúde, pedagogia e tecnologia, tudo isso para obter um conteúdo e metodologia totalmente direcionadas ao público portador da síndrome de Down.
                </p>
            </div>
        </div>
        
        <div className='rodape_cap '>
            Conheça historias inspiradoras de pessoas com síndrome de Down que fazem sucesso no mercado de trabalho
        </div>
        
        <div>
        <a href="http://www.movimentodown.org.br/">
                            <img src={Parc3} width="150" height="100"></img>
                        </a> 
        
        </div>
                        
                    
        
    </main>
    )
}