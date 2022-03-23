import Brain from '../../../assets/imagens/brain_storn_grande1.jpg';
import BrainPq from '../../../assets/imagens/brain_storn_pequena1.jpg';
import BrainMd from '../../../assets/imagens/brain_storn_media1.jpg';

import Tricolor from '../../../assets/imagens/tricolor_pc_grande.jpg';
import TricolorMd from '../../../assets/imagens/tricolor_pc_media.jpg';
import TricolorPq from '../../../assets/imagens/tricolor_pc_pequena.jpg';

import AmbienteTrabalho from '../../../assets/imagens/ambiente_trabalho1_grande.jpg';
import AmbienteTrabalhoMd from '../../../assets/imagens/ambiente_trabalho1_media.jpg';
import AmbienteTrabalhoPq from '../../../assets/imagens/ambiente_trabalho1_pequena.jpg';
import './style.css';
export default function OQueFazemos(){
    return(
        <div className="container grid-container">
            <div>
                <main className="principal_quem_somos">
                    <h1 className="text_primary"> O QUE <span className='nome_home2'> FAZEMOS </span> </h1>

                    <div>
                        <picture>
                            <source media="(max-width: 300px)" srcSet= {BrainPq} />
                            <source media="(max-width: 600px)" srcSet={BrainMd} />
                            <img src={Brain} alt="ideação de métodos educacionais" />
                        </picture>
                    </div>


                    <div>
                        <p className="paragQmSm"> {'✪'} Temos o objetivo de conectar pessoas com Sindrome de Down a futuros empregadores. Os usuarios terão acesso ao banco de vagas de empresas parceiras e poderão participar de processos seletivos. </p>
                        <picture>
                        <source media="(max-width: 300px)" srcSet="" />
                            <source media="(max-width: 300px)" srcSet={TricolorPq} />
                            <source media="(max-width: 600px)" srcSet={TricolorMd} />
                            <img src={Tricolor} alt="homem com síndrome de down, trabalhando no computador" />
                        </picture>
                    </div>
                    <div>
                        <p className="paragQmSm"> {'✪'} Após a contratação, o Instituto Down permanece presente acompanhando o desenvolvimento da relação do novo contratado e da empresa parceira com visitas periódicas ao ambiente de trabalho. </p>

                        <picture>
                            <source media="(max-width: 300px)" srcSet={AmbienteTrabalhoPq} />
                            <source media="(max-width: 600px)" srcSet={AmbienteTrabalhoMd} />
                            <img src={AmbienteTrabalho} alt="pessoas em seu ambiente de trabalho" />
                        </picture>
                    </div>
                </main>                
            </div>
        </div>
    )
}
