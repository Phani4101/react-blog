import Header from "./header";
import Home from "./home";
import Bollywood from "./bollywood";
import Technology from "./technology";
import Hollywood from "./hollywood";
import Fitness from "./fitness";
import Food from "./food";
import Footer from "./footer";
import { BrowserRouter,Route } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <div className="container">
    <Header />
    <hr className="horizontal-line" />
    <Route path="/bollywood" component={Bollywood} />
    <Route path="/technology" component={Technology} />
    <Route path="/hollywood" component={Hollywood} />
    <Route path="/fitness" component={Fitness} />
    <Route path="/food" component={Food} />
    <Route path="/" component={Home} exact />
    <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;