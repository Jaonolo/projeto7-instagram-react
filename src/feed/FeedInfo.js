const FeedInfo = props => 
    <div className="feed-info">
        <div>
            <div className="feed-controls">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <ion-icon name="bookmark-outline"></ion-icon>
        </div>
        <div id="feed-liked">
            <img className="profile" src="public/gato-telefone 1.png" alt=""/>
            <p>Curtido por <strong>x</strong> e <strong>outras y pessoas</strong></p>
        </div>
        <p><strong>{props.data.owner.username}</strong> viciado químico em celular</p>
        <p><small>Ver todos os z comentários</small></p>
        <div>
            <p><strong>usuário A</strong> kkkk é nois gato fedido</p>
            <ion-icon id="temp" name="heart-outline"></ion-icon>
        </div>
        <p><span className="pitico">HÁ W HORAS</span></p>
    </div>

export default FeedInfo