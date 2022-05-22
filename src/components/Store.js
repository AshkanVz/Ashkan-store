import React ,{useContext} from 'react';
//components
import Product from './shared/Product';
import Loader from './shared/Loader';
//context
import { ProductsContext } from '../contexts/Productcontextprovider';
// Style
import styles from "./Store.module.css";

const Store = () => {

    const produtcts = useContext(ProductsContext)
    return (
        <div className={styles.maincontainer}>
                    <div className={styles.container}>

            {produtcts.length ? produtcts.map(product => <Product key={product.id} productData={product}/>) : <Loader/>}

            </div>
        </div>
        
    );
};

export default Store;