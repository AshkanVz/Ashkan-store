import './App.css';
import {  Route , Redirect, Switch } from 'react-router-dom'

//component
import Store from './components/Store';
import ProductDetail from './components/ProductDetail';
import Shopcart from './components/Shopcart';

//Context
import Productcontextprovider from './contexts/Productcontextprovider';
import Cartcontextprovider from './contexts/Cartcontextprovider';
import Navbar from './components/shared/Navbar';
import Footernav from './components/Footernav';






function App() {
  
  return (
    <div className="App">
      <Productcontextprovider>
         <Cartcontextprovider>
           <Navbar/>
            <Switch>
              <Route path="/products/:id" component={ProductDetail}/>
              <Route path="/products" component={Store}/>
             
              <Route path="/cart" component={Shopcart}/>
              
              <Redirect to="/"/>
            </Switch>
            
            <Footernav/>
         </Cartcontextprovider>
         
      </Productcontextprovider>
      
      
      
    </div>
  );
}

export default App;
