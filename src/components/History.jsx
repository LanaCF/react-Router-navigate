import { Link, useLocation } from "react-router-dom";
import { handleNavLinkClick } from "../utils/handleNavLinkClick";

export const History = ({ isToggle, visitedPages, setVisitedPages }) => {
    const { state, pathname } = useLocation();
    const id = state?.id;
    
    return (
        <div className="history-page" style={ { display: isToggle ? "block" : "none" } }>
            <h4>Історія</h4>
            <hr />
            {
                visitedPages && visitedPages.map((page, index) => (
                    <Link 
                        onClick={ () => handleNavLinkClick(pathname, setVisitedPages) } 
                        key={ index } 
                        to={ page } 
                        className="history-page__link" 
                        state={ { from: pathname, id } }>
                            <p className="history-page__page">{ page }</p>
                    </Link>
                ))
            }

            {/* {
                lastVisitedPostId && (
                    <Link to={`blog/${ lastVisitedPostId }`} className="history-page__link">
                        <p className="history-page__page">Last visited post</p>
                    </Link>
                )
            } */}
        </div>
    );
};