import { Link } from "react-router-dom";

function Navbar(){
    return(
        <header>
            <nav>
                <div>
                    <strong>Shopsphere</strong>
                </div>

                <div>
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;