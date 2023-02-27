import './navbar.css';


const NavBar = () =>{
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container container">
                <input type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="menu-items">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#blog">Blog</a></li>
                        {/* <li><a href="#food">Category</a></li> */}
                        <li><a href="#food-menu">Shop</a></li>
                        <li><a href="#testimonials">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <h1 className="logo">Sean Nganga</h1>
                </div>
            </nav>
        </>
    )
}

export default NavBar;