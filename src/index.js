import reactDom from "react-dom";
import Header from "./Header"
import StoriesHolder from "./StoriesHolder";
import Feed from './feed/Feed.js'
import image1 from './assets/gato-telefone 1.png'
import './App.css'
import Aside from "./aside/Aside.js";
import Nav from "./Nav";

const stories = [...Array(15)].map(a => 
    {return {
        profileImage: image1,
        username: 'oie'
    }}
)

const feed = [
    {
        owner: {profileImage: image1, username: 'oi'},
        content: {isVideo: false, img: image1},
        comments: [{username: 'oi', value: 'salve salve salve'}, {username: 'oi', value: 'salve salve salve'}],
        liked: [{profileImage: image1, username: 'oi'}, {profileImage: image1, username: 'oi'}],
        description: 'salve'
    }
]

const me = {
    profileImage: image1,
    username: 'jaonolo',
    name: 'Jão'
}

const suggestions = [{
    profileImage: image1,
    username: 'jaonolo'
}]

const App = () => 
    <div>
        <Header isMobile={false} />
        <div className="page-holder">
            <section className="page-content">
                <StoriesHolder stories={stories} />
                <Feed feed={feed} />
            </section>
            <Aside me={me} suggestions={suggestions}/>
        </div>
        <Nav />
    </div>

reactDom.render(
    <App/>,
    document.querySelector('.root')
);