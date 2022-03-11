import reactDom from "react-dom";
import Header from "./Header"

const App = () => 
    <div>
        <Header isMobile={false} />
    </div>

reactDom.render(
    <App/>,
    document.querySelector('.root')
);