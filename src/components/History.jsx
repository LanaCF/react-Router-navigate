import { Link } from "react-router-dom";

export const History = ({ isToggle, visitedPages, lastVisitedPostId }) => {

    console.log(lastVisitedPostId)
    
    return (
        <div className="history-page" style={ { display: isToggle ? "block" : "none" } }>
            <h4>Історія</h4>
            <hr />
            {
                visitedPages && visitedPages.map((page, index) => (
                    <Link key={ index } to={ page } className="history-page__link">
                        <p className="history-page__page">{ page }</p>
                    </Link>
                ))
            }

            {
                lastVisitedPostId && (
                    <Link to={`blog/${ lastVisitedPostId }`} className="history-page__link">
                        <p className="history-page__page">Last visited post</p>
                    </Link>
                )
            }
        </div>
    );
};