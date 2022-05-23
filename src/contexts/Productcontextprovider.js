import  {useState , useEffect ,createContext} from 'react';

//API
import { getproducts } from '../services/api';

export const ProductsContext = createContext();

const Productcontextprovider = ({children}) => {

    const [products, setProducts]= useState([]);
    const [currentPage, setCurrentPage]= useState(1);
    const [postsperpage]= useState(5);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getproducts());
        }

        fetchAPI();
    }, []);

//get current products
const indexoflastpost = currentPage * postsperpage;
const indexoffirstpost = indexoflastpost - postsperpage;
//const currentposts = products.slice(indexoffirstpost,indexoflastpost); 

//change page
const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <ProductsContext.Provider value={{indexoflastpost,indexoffirstpost, postsperpage , products , paginate}}>
             {children}
        </ProductsContext.Provider>
    );
};

export default Productcontextprovider;