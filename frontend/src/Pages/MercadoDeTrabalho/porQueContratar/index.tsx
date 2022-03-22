import { Card } from "react-bootstrap"
import "../porQueContratar/style.css";
import Parc1 from "../../../assets/imagens/itau.png"
import Parc2 from "../../../assets/imagens/recode.jpg"
import Parc3 from "../../../assets/imagens/movimentoD.jpg"
import Parc4 from "../../../assets/imagens/incluo-logo.jpg"



export default function PorQueContratar() {
    return (
        <body>
            <main >


                <div className="text-center">
                    <h2 className="display-4 titulo font-weight-bold">Empresas Parceiras</h2>
                </div>
                <br />
                <h6>Por que o trabalho importa:</h6>
                <p>
                    Ser mais independente, contribuir para a sociedade, ter sua própria renda, aprender novas
                    habilidades, conhecer novas pessoas e se sentir valorizado. Pessoas com síndrome de Down querem trabalhar pelas mesmas
                    razões que qualquer outra pessoa. Mas a maioria das pessoas com síndrome de Down enfrenta barreiras e preconceitos,
                    falta de oportunidades, baixas expectativas e atitudes estereotipadas. Desmitificar falsas impressões sobre o potencial
                    das pessoas com deficiência e os benefícios que trazem para o local de trabalho inclusivo são as alguns dos
                    aprendizados experimentados por diversas empresas, empregadores e funcionários. Toda pessoa com síndrome de Down pode
                    trabalhar de acordo com suas habilidades.
                </p>
                <p>

                    <h6>Objetivo</h6>

                    O objetivo é encontrar uma função que se encaixe em cada indivíduo para que
                    ele possa fazer seu trabalho com sucesso. Quando a oportunidade certa é oferecida, pessoas com síndrome de Down podem
                    alcançar grandes coisas e ter um impacto positivo nos colegas, satisfação do cliente, impacto positivo na cultura
                    empresarial e motivação para toda a empresa. A diversidade fortalece todos os locais de trabalho. Um ciclo virtuoso
                    que se espalha pelo resto da sociedade.
                </p>
                <p>
                    Também queremos mostrar ao mundo que uma pessoa portadora da síndrome de Down pode sim ser capaz de trabalhar com comprometimento e responsabilidade.
                    Além disso é notório que a pessoa com Down pode estimular todos na equipe a se tornarem mais compreensivos e abertos ao diálogo, aumentando inclusive a habilidade do gestor
                    de resolver conflitos, ampliando a diversidade em todos os aspectos do ambiente laboral.
                    Uma vez contratado, o Instituto Down atua junto a empresa e ao contratado oferecendo suporte e acompanhamento periódico.
                    Ao contratar um de nossos talentos, sua empresa tem a oportunidade de saber na prática os benefícios de ter um colaborador com síndrome de Down e ainda colabora com o desenvolvimento da sociedade.
                </p>
                <br />
                <br />
                <div className="flex">
                    <div className="bordas">
                    <a href="https://www.itausocial.org.br/">
                        <img src={Parc1}  width="140" height="140"></img>
                    </a>
                    </div>
                    <div className="bordas">                    
                    <a href="https://www.recodepro.org.br/">
                        <img src={Parc2}  width="150" height="50" ></img>
                    </a>
                    </div>
                    <div className="bordas">
                    <a href="http://www.movimentodown.org.br/">
                        <img src={Parc3} width="150" height="100"></img>
                    </a>
                    </div>
                    <div className="bordas">
                    <a href="http://incluo.com.br/">
                        <img src={Parc4} width="150" height="35"></img>
                    </a>
                    </div>
                </div>
            </main>
        </body>
    )
}