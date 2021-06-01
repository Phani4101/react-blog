import "./heading.css";
import Thelatest from './thelatest';
import TheLatestJson from './thelatest.json';
import ThelatestArticle from './thelatestarticle';
import ThelatestArticleJson from './thelatest-article.json';
import Thepost from './thepost';
import LatestStories from './lateststories';


const Home=()=>{

let array=TheLatestJson;
let array2=ThelatestArticleJson;


    return (
        <>
        <div className="grid-container">
        <div className="main-image-1">
            <img src="http://s1.picswalls.com/wallpapers/2017/12/11/nature-backgrounds_123026774_313.jpg" alt="nature-main"/>
            <span className="image-text">
                <h3>Title of vertical gallery</h3>
                <p>Travel/August 21 2017</p>
            </span>
        </div>
        <div className="main-image-2">
            <img src="http://www.thewowstyle.com/wp-content/uploads/2015/07/Natural-World-Wallpaper-HD-.jpg" alt="nature" />
            <span className="image-text">
                <h3>Title of vertical gallery</h3>
                <p>Travel/August 21 2017</p>
            </span>
        </div>
        <div className="main-image-3">
            <img src="http://www.thewowstyle.com/wp-content/uploads/2015/01/Amazing-Nature-Wallpaper.jpg" alt="nature2" />
            <span className="image-text">
                <h3>Title of vertical gallery</h3>
                <p>Travel/August 21 2017</p>
            </span>
        </div>
        </div>
        <Thelatest array={array} />
        <ThelatestArticle array={array2} />
        <Thepost array={array2} array1={array} />
        <LatestStories array={array} />
        </>
    );
    }
    export default Home;