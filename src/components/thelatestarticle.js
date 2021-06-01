


const ThelatestArticle =(props)=>{
return (
    <>
    <h2 className="thelatest">Latest Article</h2>
    <hr className="thelatest-underline" />
    <span className="thelatest-article-cards-container">
        
        {props.array.map((item)=>(
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
    <span className="advs">Advertisement</span>
    <div className="thelatest-article-cards-container extra-otherthan">
        <img src="https://weneedfun.com/wp-content/uploads/2016/10/Peaceful-Nature-Sunrise-Wallpapers-8.jpg" alt="single" className="single-img" />
        <div className="somemore">
            <div style={{fontSize:"30px"}}>&#8592;</div>
            <div className="set">
        <h2>Title of Vertical Gallery</h2>
        <p>Travel /August 20 2021</p>
        </div>
        <div style={{fontSize:"30px"}}>&rarr;</div>

        </div>
    </div>

    </>
);
}
export default ThelatestArticle;