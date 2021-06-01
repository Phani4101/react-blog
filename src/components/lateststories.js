const LatestStories =(props)=>{
return (
    <>
    <h2 className="thelatest">Latest Stories</h2>
    <hr className="thelatest-underline" />
    <hr className="horizontal-line"/>
    <div className="lateststories-container">
    {props.array.map((item)=>(
            <div className="lateststories-card" key={item.id}>
                <h2>{item.title}</h2>
                <p className="p1">{item.about}</p>
                <p className="p2">{item.time}</p>

            </div>
    ))}
    </div>
    <hr className="line"/>
    </>
);
}
export default LatestStories;