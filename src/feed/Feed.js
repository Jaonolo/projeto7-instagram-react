import FeedAccount from './FeedAccount'
import FeedInfo from './FeedInfo'
import './Feed.css'

const Feed = props => 
    <div>
        {props.feed.map(post => 
            <div className="feed-container">
                <FeedAccount account={post.owner}/>
                {post.content.isVideo ?
                    <video
                        autoplay
                        muted 
                    >
                        <source src={post.content.mp4} type="video/mp4"/>
                        <source src={post.content.ogg} type="video/ogg"/>
                        Seu navegador não suporta vídeo ;-;
                    </video>
                :
                    <img src={post.content.img} alt="gato" />
                }
                <FeedInfo data={post}/>
                {/* <FeedComments comments={post.comments}/> */}
            </div>
        )}
    </div>

export default Feed