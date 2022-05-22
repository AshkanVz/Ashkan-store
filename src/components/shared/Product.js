import React , {useContext}from 'react';
import {Link} from 'react-router-dom';

import trash from '../../assets/icons/trash.svg';

//functions
import { shorten , isIncart , quantityCount} from '../../helper/function';

//context
import { CartContext } from '../../contexts/Cartcontextprovider';

// Style
import styles from "./Product.module.css";

const Product = ({productData}) => {
    const {state , dispatch} = useContext(CartContext);
    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt="product"  />
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price} $`}</p>
            <div  className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Detail</Link>
                <div  className={styles.buttonContainer}>
                     {quantityCount(state,productData.id) > 1 &&  <button className={styles.smallButton} onClick={()=> dispatch({type:"DECREASE", payload :productData})}>-</button>}
                     {quantityCount(state,productData.id) === 1 &&  <button className={styles.smallButton} onClick={()=> dispatch({type:"REMOVE_ITEM", payload :productData})}><img src={trash} alt="trash" /></button>}
                     {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                         {isIncart(state , productData.id)?
                         <button className={styles.smallButton} onClick={()=> dispatch({type :"INCREASE", payload :productData})}>+</button> : 
                         <button onClick={()=> dispatch({type :"ADD_ITEM", payload :productData})}>add to cart</button>
                     }
                     
                </div>
            </div>
        </div>
    );
};

export default Product;