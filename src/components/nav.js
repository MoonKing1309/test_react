import {Link} from "react-router-dom"
function  Nav()
{
    return(
        <nav>
            <div className="navbar">
             <Link className="navbar-brand">Ethnus</Link>
                <div className="nav">
                    <Link to="/home" className="nav-link active">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav