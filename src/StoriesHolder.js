import Story from './Story'
import './StoriesHolder.css'

const StoriesHolder = props => 
    <div id="strhldr" className="stories-holder">
        {
            props.stories.map(
                story => <Story key={story.username} data={story} />
            )
        }
        <button className="desktop-only" onClick={() => console.log('oi')}>
            <ion-icon id="btn" name="chevron-forward-circle"></ion-icon>
        </button>
    </div>

export default StoriesHolder