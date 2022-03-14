import './Aside.css'
import AsideAccount from './aside/AsideAccount'
import AsideSuggestions from './aside/AsideSuggestions'

const me = {
    name: 'Jão',
    username: 'jaonolo'
}

const suggestions = [{
    username: 'jaonolo',
}]

const Aside = props => 
    <aside>
        <AsideAccount account={me}/>
        <div>
            <p>Sugestões pra você</p>
            <a href="#"><strong>Ver Tudo</strong></a>
        </div>
        {
            suggestions.map(suggestion => <AsideSuggestions account={suggestion}/>)
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