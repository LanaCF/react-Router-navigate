import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LastPost } from "./LastPost";
import { History } from "./History";
import { handleNavLinkClick } from "../utils/handleNavLinkClick";
import { useVisitedPages } from "../hooks/useVisitedPages";

const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state, pathname } = location;
    const { visitedPages, setVisitedPages } = useVisitedPages();

    const fromHandler = () => {
        navigate(state?.from, { state: { from: pathname } });
    }

    return (
        <div className="container">
            <Header visitedPages={ visitedPages } setVisitedPages={ setVisitedPages } />

            <div className="history-block">
                {
                    state?.from && 
                        <button 
                            onClick={ () => {
                                handleNavLinkClick(state?.from, setVisitedPages);
                                fromHandler();
                            } }
                        >
                            { state?.from }
                        </button>
                }
            </div>

            <LastPost />

            <History />

            <main className="main">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;