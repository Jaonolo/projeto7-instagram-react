import './Header.css'
import logoImg from './assets/logo.png'

const logo = <img src={logoImg} alt="instagram-logo"/>

const Header = props =>
    <header>
        <div className="header-content mobile-only">
            <ion-icon name="logo-instagram"></ion-icon>
            {logo}
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div className="header-content desktop-only">
            <div className="header-logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div className="vertical-separator"></div>
                {logo}
            </div>
            <input type="text" placeholder="Pesquisar"/>
            <div className="header-menu">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    </header>

export default Header