const AsideAccount = props => 
    <div className="aside-account">
        <img className="profile" src={props.profilePicture} alt=""/>
        <p>
            <strong>
                {props.account.username}
            </strong>
            <br />
            <small>{props.account.name}</small>
        </p>
    </div>

export default AsideAccount