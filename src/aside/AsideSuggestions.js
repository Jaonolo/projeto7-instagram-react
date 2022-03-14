const AsideSuggestions = props => 
    <div>
        <div className="aside-suggestions">
            <img className="profile" src={props.account.profilePicture} alt=""/>
            <p>
                <strong>
                    {props.account.username}
                </strong>
                <br />
                Segue você
            </p>
        </div>
        <p><a href="#">Seguir</a></p>
    </div>

export default AsideSuggestions