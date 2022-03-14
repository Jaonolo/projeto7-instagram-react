import './Header.css'

const Header = props => (props.isMobile) ?
    <header>
        <div className="header-content mobile-only">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src="public/logo.png" alt="instagram-logo"/>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    </header>
    :
    <header>
        <div className="header-content desktop-only">
            <div className="header-logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div className="vertical-separator"></div>
                <img src="public/logo.png" alt="instagram-logo"/>
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