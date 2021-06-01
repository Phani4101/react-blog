import "./heading.css";
import {NavLink} from 'react-router-dom';

const Header=()=>{
    const func=()=>{
        
        let a=document.querySelector("nav");
        if(a.style.display==="none")
        {
            a.style.display="block";
        }
            else
            {
            a.style.display="none";
            }

        }
        let activestyle={color:'red',textDecoration:'underline',fontWeight:'500'};
    return (
        <>
        <NavLink style={{textDecoration:"none",color:"black"}} to="/" exact><div className="the-siren-heading"><span className="the-inner-heading">The</span>Siren</div></NavLink>
        <div className="dropdown">
        <button className="menu-btn" onClick={func}>&#9776;</button>
        </div>
        <nav>
            <div><NavLink activeStyle={activestyle} to="/" exact >Home</NavLink></div>
            <div><NavLink activeStyle={activestyle} to="/bollywood">Bollywood</NavLink></div>
            <div><NavLink activeStyle={activestyle} to="/technology">Technology</NavLink></div>
            <div><NavLink activeStyle={activestyle} to="/hollywood">Hollywood</NavLink></div>
            <div><NavLink activeStyle={activestyle} to="/fitness">Fitness</NavLink></div>
            <div><NavLink activeStyle={activestyle} to="/food">Food</NavLink></div>
        </nav>
        
        
        </>
    )

}
export default Header;