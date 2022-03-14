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
            <img className="profile" src={props.data.liked[0].profileImage} alt=""/>
            <p>Curtido por <strong>{props.data.liked[0].username}</strong> e <strong>outras {props.data.liked.length - 1} pessoas</strong></p>
        </div>
        <p><strong>{props.data.owner.username}</strong> {props.data.description}</p>
        {
            props.data.comments.length > 1 ? 
            <p><small>Ver todos os {props.data.comments.length} comentários</small></p> :
            ''
        }
        <div>
            <p><strong>{props.data.comments[0].username}</strong> {props.data.comments[0].value}</p>
            <ion-icon id="temp" name="heart-outline"></ion-icon>
        </div>
        <p><span className="pitico">HÁ 2 HORAS</span></p>
    </div>

export default FeedInfo