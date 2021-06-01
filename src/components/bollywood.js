import BollywoodJson from './bollywood.json';
import './heading.css'
import Thepost from './thepost';
import TheLatestJson from './thelatest.json';

import ThelatestArticleJson from './thelatest-article.json';

const Bollywood=()=>{
    let bollywood=BollywoodJson;
    let array=TheLatestJson;
let array2=ThelatestArticleJson;
    return (
        <>
        <h2 className="thelatest">Bollywoood</h2>
    <hr className="thelatest-underline" />
    <span className="thelatest-article-cards-container">
        
        {bollywood.map((item)=>(
            <>
            
            <div className="thelatest-Article-card" key={item.id}>
            <hr/>
            <img src={item.url} alt="nature" className="article-img" />
            <div className="Article-font-items">
                <h3>{item.title}</h3>
                <p>{item.about}</p>
                <p>{item.time}</p>
                </div>
            </div>
           
            </>
        ))}
        <button className="thelatest-btn">See More</button>
        </span>
        <span>
        <Thepost array={array2} array1={array} />
        <span className="advs">Advertisement</span>
        </span>
        </>
    );
    }
    export default Bollywood;