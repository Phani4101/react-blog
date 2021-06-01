import {Link} from 'react-router-dom';

const Footer=()=>{
return (
    <div className="footer-container">
<h1>React Blog</h1>
<p>Made by<button><Link to="#" >&#64;Chiru</Link></button></p>
<p>Learn how to grow your blog as a developer without <br/>an existing audience through great writing and SEO.</p>


    </div>
);
}
export default Footer;