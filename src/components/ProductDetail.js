import axios from 'axios';
import React, {useContext , useEffect , useState} from 'react';
import { Link } from 'react-router-dom';

//Context
import { ProductsContext } from '../contexts/Productcontextprovider';

// Style
import styles from "./ProductDetails.module.css";

const ProductDetail = (props) => {
 const[product , setProduct] = useState([]);
    const id = props.match.params.id;
    //const data = useContext(ProductsContext);
    //const product = data[id - 1];
    
   
    const {image , price , category ,title , description}= product

    useEffect(() => {
       
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setProduct(response.data) )
    }, []);
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="product" />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/products">back to shop</Link>
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;