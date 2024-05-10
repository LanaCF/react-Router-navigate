import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { History } from "./History";
import { handleNavLinkClick } from "../utils/handleNavLinkClick";
import { useAuth } from "../hooks/useAuth";

export const Header = ({ visitedPages, setVisitedPages }) => {
    const { pathname, state } = useLocation();
    const id = state?.id;
    const [isToggle, setIsToggle] = useState(false);
    const { user, signout } = useAuth() || {};    

    const toggleHandler = () => {
        setIsToggle(prev => !prev);
    }

    const isActiveCallback = ({ isActive }) => isActive ? "menu__link menu__link_active" : "menu__link";

    const handleSignout = () => {
        signout();
    };

    return (
        <header className="header">
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <NavLink to="/" onClick={ () => handleNavLinkClick(pathname, setVisitedPages) } state={ { from: pathname, id } } className={ isActiveCallback }>Home</NavLink>
                    </li>
                    
                    <li className="menu__item">
                        <NavLink to="/about" onClick={ () => handleNavLinkClick(pathname, setVisitedPages) } state={ { from: pathname, id } }  className={ isActiveCallback }>About</NavLink>
                    </li>

                    <li className="menu__item">
                        <NavLink to="/blog" onClick={ () => handleNavLinkClick(pathname, setVisitedPages) } state={ { from: pathname, id } }  className={ isActiveCallback }>Blog</NavLink>
                    </li>

                    <li className="menu__item">
                        <NavLink to="/contacts" onClick={ () => handleNavLinkClick(pathname, setVisitedPages) } state={ { from: pathname, id } }  className={ isActiveCallback }>Contacts</NavLink>
                    </li>
                </ul>
            </nav>

            <button onClick={ toggleHandler }>History</button>
            <History isToggle={ isToggle } visitedPages={ visitedPages } handleNavLinkClick={ handleNavLinkClick } setVisitedPages={ setVisitedPages } />

            {/* <div className="authorization">
                {user !== null ? (
                    <div className="info">
                        <span>{ user }</span>
                        <button onClick={ handleSignout }>Logout</button>
                    </div>
                ) : (
                    <div className="info">
                        <Link to={ '/login' } state={ { from: pathname } }>
                            <button>Login</button>
                        </Link>
                    </div>
                )}
            </div> */}

            <div className="authorization">
                { !user
                    ? <div className="info">
                        <Link to={ '/login' } state={{ from: pathname }}>
                            <button>Login</button>
                        </Link>
                    </div>
                    : <div className="info">
                        <span>{ user }</span>
                        <button onClick={ handleSignout }>Logout</button>
                    </div>
                }
            </div>
        </header>
    );
};
