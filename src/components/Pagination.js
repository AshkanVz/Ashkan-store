import React ,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ProductsContext } from '../contexts/Productcontextprovider';
const Pagination = ({paginate}) => {
    const pageNumber = [];
    const {postsperpage, products} = useContext(ProductsContext);
    let totalposts = products.length
    for(let i = 1 ; i <= Math.ceil(totalposts / postsperpage); i++){
        pageNumber.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="#"  className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;