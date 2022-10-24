import LinksContainer from "./style";
import { BiLinkExternal } from 'react-icons/bi';

const Links = () => {

    return (
        <LinksContainer>
            <h3  className = 'links-title'> 
                Alguns links para auxiliar na sua construção 
            </h3>

            <ul className = 'links-list'>
                <li className = 'links-list-item'>
                    <a className = 'links-list-link' target = '_blank' rel = 'noreferrer' href = 'http://tabeladealimentos.com.br/'>
                        Quantidade de macronutrientes nos alimentos
                    </a>
                    <BiLinkExternal />
                </li>
                <li className = 'links-list-item'>
                    <a className = 'links-list-link' target = '_blank' rel = 'noreferrer' href = 'https://www.youtube.com/watch?v=3u1shpbWSIo'>
                        Base para dieta de perda de gordura
                    </a>
                    <BiLinkExternal />
                </li>
                <li className = 'links-list-item'>
                    <a className = 'links-list-link' target = '_blank' rel = 'noreferrer' href = 'https://www.youtube.com/watch?v=5c_0xut1lpo'>
                        Base para dieta de ganho de massa
                    </a>
                    <BiLinkExternal />
                </li>
            </ul>
            <p className = 'links-footer'> 
                Independente da sua intenção, recomendo muito que busque conhecimento nas doces palavras deste 
                grandioso mestre 
                <a className = 'twin' target = '_blank' rel = 'noreferrer' href = 'https://www.youtube.com/c/LeandroTwin'> 
                    Leandro Twin <BiLinkExternal />
                </a>

            </p>
        </LinksContainer>
    )
}

export default Links;