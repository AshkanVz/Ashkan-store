import  {useState , useEffect ,createContext} from 'react';

//API
import { getproducts } from '../services/api';

export const ProductsContext = createContext();

const Productcontextprovider = ({children}) => {

    const [products, setProducts]= useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getproducts());
        }

        fetchAPI();
    }, []);

    return (
        <ProductsContext.Provider value={products}>
             {children}
        </ProductsContext.Provider>
    );
};

export default Productcontextprovider;