const Thepost =(props)=>{
return (
    <div className="Thepost-container">
    <h3 className="thelatest">Top Posts</h3>
    <hr className="thelatest-underline" />
    <div className="thepost-single-card">
    <hr  />
    <img src={props.array[0].url} alt="single-img" className="thepost-single-img" />
    <div className="items-items" >
     <h3>{props.array[0].title}</h3>
     <p>{props.array[0].time}</p>
     </div>
     <h5>{props.array[0].id}</h5>
     
     </div>
     {
         props.array1.map((item)=>(
             <div className="thepost-card">
                 <hr />

                 <img src={item.url} alt="img" className="thepost-img" />
                 <div className="postcard-items">
                 <h3>{item.title}</h3>
                 <p>{item.time}</p>
                 </div>
                 <h5>{item.id}</h5>
            
             </div>

         ))
     }


    </div>
    
);
}
export default Thepost;