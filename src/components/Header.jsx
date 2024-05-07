import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { History } from "./History";

export const Header = () => {
    const { pathname } = useLocation();
    const [isToggle, setIsToggle] = useState(false);
    const [visitedPages, setVisitedPages] = useState([]);

    const toggleHandler = () => {
        setIsToggle(prev => !prev);
    }

    const handleNavLinkClick = () => {
        setVisitedPages(prevPages => [pathname, ...prevPages]);
    }

    const isActiveCallback = ({ isActive }) => isActive ? "menu__link menu__link_active" : "menu__link";

    return (
        <header className="header">
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <NavLink to="/" onClick={ handleNavLinkClick } state={ { from: pathname } } className={ isActiveCallback }>Home</NavLink>
                    </li>
                    
                    <li className="menu__item">
                        <NavLink to="/about" onClick={ handleNavLinkClick } state={ { from: pathname } }  className={ isActiveCallback }>About</NavLink>
                    </li>

                    <li className="menu__item">
                        <NavLink to="/blog" onClick={ handleNavLinkClick } state={ { from: pathname } }  className={ isActiveCallback }>Blog</NavLink>
                    </li>

                    <li className="menu__item">
                        <NavLink to="/contacts" onClick={ handleNavLinkClick } state={ { from: pathname } }  className={ isActiveCallback }>Contacts</NavLink>
                    </li>
                </ul>
            </nav>

            <button onClick={ toggleHandler }>History</button>
            <History isToggle={ isToggle } visitedPages={ visitedPages } />
        </header>
    );
};
