import React ,{useContext} from 'react';
//components
import Product from './shared/Product';
import Loader from './shared/Loader';
//context
import { ProductsContext } from '../contexts/Productcontextprovider';
// Style
import styles from "./Store.module.css";
import Pagination from './Pagination';

//change page

const Store = () =>{
    const {indexoflastpost,indexoffirstpost , products , paginate} = useContext(ProductsContext);
    const currentposts = products.slice(indexoffirstpost,indexoflastpost); 
    console.log(indexoflastpost);
    //console.log(currentposts);
    return (
        <div className={styles.maincontainer}>
                    <div className={styles.container}>

            {currentposts.length ? currentposts.map(product => <Product key={product.id} productData={product}/>) : <Loader/>}
            </div>
            <div className="styles.page">
            <Pagination paginate={paginate} />
            </div>
        </div>
        
    );
};

export default Store;