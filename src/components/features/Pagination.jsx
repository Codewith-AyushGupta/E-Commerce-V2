import React from 'react';
import { useLocation } from 'react-router-dom';
import ALink from '../custom-link';

function Pagination() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;

    const buildLink = (pageNum) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('page', pageNum);
        return {
            pathname: location.pathname,
            search: `?${newParams.toString()}`
        };
    };

    return (
        <ul className="pagination">
            <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                <ALink className="page-link page-link-prev" href={page > 1 ? buildLink(page - 1) : '#'}>
                    <i className="d-icon-arrow-left"></i>Prev
                </ALink>
            </li>
            
            <li className={`page-item active`}>
                <ALink className="page-link" href="#">
                    1<span className="sr-only">(current)</span>
                </ALink>
            </li>
            
            <li className="page-item disabled">
                <ALink className="page-link page-link-next" href="#">
                    Next<i className="d-icon-arrow-right"></i>
                </ALink>
            </li>
        </ul>
    );
}

export default React.memo(Pagination);
