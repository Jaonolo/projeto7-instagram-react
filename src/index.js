import reactDom from "react-dom";
import Header from "./Header"
import StoriesHolder from "./StoriesHolder";
import Feed from './feed/Feed.js'
import image1 from './assets/gato-telefone 1.png'
import './App.css'

const stories = [...Array(15)].map(a => 
    {return {
        src: image1,
        username: 'oie'
    }}
)

const feed = [
    {
        owner: {profileImage: image1, username: 'oi'},
        content: {isVideo: false, img: image1},
    }
]

const App = () => 
    <div>
        <Header isMobile={false} />
        <div className="page-holder">
            <div className="page-content">
                <StoriesHolder stories={stories} />
                <Feed feed={feed} />
            </div>
        </div>
    </div>

reactDom.render(
    <App/>,
    document.querySelector('.root')
);