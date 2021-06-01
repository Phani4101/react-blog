import './heading.css';



const Thelatest=(props)=>{
    console.log(props);
return(
    <>
    <h2 className="thelatest">The Latest</h2>
        <hr className="thelatest-underline" />
        <div className="thelatest-card-container">
            {
                props.array.map((item)=>(
                    <>
                    <div className="thelatest-card" key={item.id}>
                    <img src={item.url} alt="nature" />
                    <div className="font-items">
                        <h3>{item.title}</h3>
                        <p>{item.about}</p>
                        <p>{item.time}</p>
                        </div>
                    </div>
                    </>
                ))
            }

        </div>
    </>
);
}
export default Thelatest;