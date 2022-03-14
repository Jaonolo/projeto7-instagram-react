const FeedAccount = props => 
    <div className="feed-account">
        <div>
            <img className="profile" src={props.account.profileImage} alt="profile"/>
            <p>{props.account.username}</p>
        </div>
        <ion-icon name="ellipsis-horizontal"></ion-icon>
    </div>

export default FeedAccount