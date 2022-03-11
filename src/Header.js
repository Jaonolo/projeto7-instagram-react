import './Header.css'

const Header = (props) => (props.isMobile) ?
    <header>
        <div class="header-content mobile-only">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src="public/logo.png" alt="instagram-logo"/>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    </header>
    :
    <header>
        <div class="header-content desktop-only">
            <div class="header-logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="vertical-separator"></div>
                <img src="public/logo.png" alt="instagram-logo"/>
            </div>
            <input type="text" placeholder="Pesquisar"/>
            <div class="header-menu">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    </header>

export default Header