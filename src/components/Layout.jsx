import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { LastPost } from "./LastPost";
import { History } from "./History";

const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { state, pathname } = location;

    console.log(location);

    const fromHandler = () => {
        navigate(state?.from, { state: { from: pathname } })
    }

    return (
        <div className="container">
            <Header />

            <div className="history-block">
                {
                    state?.from && <button onClick={ fromHandler }>{ state?.from }</button>
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