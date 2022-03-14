const Story = props => 
    <div id="strpst" className="stories-post">
        <div>
            <img className="profile" src={props.data.src} alt="profile" />
        </div>
        <p>{props.data.username}</p>
    </div>

export default Story