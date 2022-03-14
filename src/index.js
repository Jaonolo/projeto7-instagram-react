import reactDom from "react-dom";
import Header from "./Header"
import StoriesHolder from "./StoriesHolder";
import image1 from './assets/gato-telefone 1.png'
import './App.css'

const stories = [
    {
        src: image1,
        username: 'oi'
    }
]

const App = () => 
    <div>
        <Header isMobile={false} />
        <div className="page-holder">
            <StoriesHolder stories={stories} />
        </div>
    </div>

reactDom.render(
    <App/>,
    document.querySelector('.root')
);