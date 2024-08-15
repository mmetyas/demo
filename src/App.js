import './App.css';
import FunForm from './Pages/FunForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import FunFormReg from './Pages/FunFormReg';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from './Pages/NotFound';
import NavBar from './Components/NavBar';
import Products from './Pages/Products';
import DetailsProduct from './Pages/DetailsProduct';
// import { CartProvider } from './Context/CartContext';
import Cart from './Components/Cart'
import FavoritesPag from './Pages/FavouritePage';



function App() {

  return (
    <div>
      <BrowserRouter>
        {/* <CartProvider> */}
          <NavBar />
          <Switch>
            <div className='container py-5'>
              <Route path={"/"} component={FunForm} exact />
              <Route path="/cart" component={Cart} />
              <Route path={"/reg"} component={FunFormReg} exact />
              <Route path={"/products"} component={Products} exact />
              <Route path={"/user/:id"} component={DetailsProduct} exact />
              <Route path={"/favourie"} component={FavoritesPag} exact />
              <Route path={"*"} component={NotFound} exact />
            </div>
          </Switch>
        {/* </CartProvider> */}
      </BrowserRouter>
    </div>

  );
}

export default App;
