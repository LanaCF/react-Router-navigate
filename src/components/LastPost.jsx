import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const LastPost = ({ setLastVisitedPostId }) => {
    const { state } = useLocation();
    const lastVisitedPostId = state?.id || '';
    const [lastVisitedPost, setLastVisitedPost] = useState(null);

    useEffect(() => {
        if (lastVisitedPostId) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${ lastVisitedPostId }`)
                .then(response => response.json())
                .then(data => {
                    setLastVisitedPost(data);
                    setLastVisitedPostId(lastVisitedPostId);
                })
                .catch(error => console.error('Помилка отримання даних про пост:', error));
        }
    }, [lastVisitedPostId, setLastVisitedPostId]);

    return (
        <div className="last-post">
            <h4>Останній переглянутий пост</h4>
            <hr />
            {lastVisitedPost && (
                <Link to={ `blog/${ lastVisitedPostId }` } className="last-post__link" state={ { id: lastVisitedPostId } }>
                    <p className="last-post__title">{ lastVisitedPost.title }</p>
                </Link>
            )}
        </div>
    );
};