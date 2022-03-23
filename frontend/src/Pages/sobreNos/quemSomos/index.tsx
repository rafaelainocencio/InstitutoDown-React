import LogoQm from '../../../assets/imagens/2.png';

export default function QuemSomos(){
    return(
        <>
        <div className='principal_qmsm'>
            <div className='item1_qmsm'>
                <picture>
                    
                    <img src={LogoQm} alt="" />
                </picture>
            </div>
            
            <div className='item2_qmsm'>
                <h1 className="titulo_qmsm"> Quem <span className='nome_home2'> somos </span> </h1>
                    <p className='parag_qmsm'>O Instituto Down foi criado em outubro de 2021, com o objetivo de capacitar e incluir no mercado de trabalho pessoas portadoras da síndrome de Down. No Brasil, infelizmente, o portador da síndrome de Down enfrenta diariamente o preconceito e encontra muitas barreiras na hora de escolher uma profissão e encontrar uma oportunidade no mercado de trabalho. Sabemos que um emprego é, além de uma fonte de renda, um sinal de autonomia, independência e inclusão social. Além disso, o emprego tem uma grande influência na autoimagem e autoestima profissional de uma pessoa, pois uma pessoa com autoestima profissional elevada sente-se capaz e pronta para os desafios do dia a dia. O Instituto Down acredita que toda pessoa tem direito ao trabalho e entendemos que as empresas precisam adquirir essa consciência social e abrir espaço para os portadores da síndrome de Down. O princípio para isso é entender que a doença não é sinal de incapacidade, apenas de diferença. É importante saber que um portador da síndrome de Down tem condições de aprender - mesmo que com mais lentidão - e pode sim exercer uma profissão, contribuindo para a empresa e para a sociedade.
                    </p>
            </div>
        </div>
    </>
    )
}