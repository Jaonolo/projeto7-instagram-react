import './Aside.css'
import AsideAccount from './AsideAccount'
import AsideSuggestions from './AsideSuggestions'

const Aside = props => 
    <aside>
        <AsideAccount account={props.me}/>
        <div>
            <p>Sugestões pra você</p>
            <a href="#"><strong>Ver Tudo</strong></a>
        </div>
        {
            props.suggestions.map(suggestion => <AsideSuggestions account={suggestion}/>)
        }
        <p><small>
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
            Termos • Localizações • Contas mais relevantes • Hashtags • 
            Idioma 
        </small></p>
        <p><small>
            © {(new Date(Date.now())).getFullYear()} INSTAGRAM DO FACEBOOK
        </small></p>
    </aside>

export default Aside