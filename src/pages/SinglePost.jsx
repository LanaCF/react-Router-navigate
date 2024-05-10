import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { handleNavLinkClick } from '../utils/handleNavLinkClick';
import { useVisitedPages } from '../hooks/useVisitedPages';

export const SinglePost = () => {
    const { setVisitedPages } = useVisitedPages();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Помилка отримання даних про пост:', error));
    }, [id]);

    console.log('P', pathname)

    const gobackHandler = () => {
        navigate('/blog', { state: { id }, from: { pathname } }); 
        handleNavLinkClick(pathname, setVisitedPages);
    }

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="single-post-page">
            <h1 className="single">Single page</h1>
            <Link to="/blog" state={ { id, from: pathname } }>
                <button onClick={ gobackHandler } className='btn-back'>
                    Back to blog
                </button>
            </Link>

            <hr />

            <div className="post">
                <h3 className="post__title">{ post.title }</h3>
                <p className="post__body">{ post.body }</p>
            </div>
        </div>
    );
};