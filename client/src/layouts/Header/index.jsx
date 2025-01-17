import { NavLink } from "react-router-dom"
import styles from "./index.module.scss"
import { MdFavoriteBorder } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className={styles["header"]}>
                    <nav>
                        <ul>
                            <h2>COLO<span>SHOP</span></h2>
                            <li>
                                <NavLink to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/about"}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/shop"}>Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/shop"}><FaSearch /></NavLink>
                            </li>
                            <li>
                                <NavLink to={"/wishlist"}><MdFavoriteBorder /></NavLink>
                            </li>
                            <li>
                                <NavLink to={"/add"}><FaAddressBook /></NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header