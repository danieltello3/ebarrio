import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./Components/Detail/Detail";
import ProductoLista from "./Components/Producto/ProductoLista";
import ServicioLista from "./Components/Servicio/ServicioLista";
import CartShop from "./Components/CarritoAndPago/CartShop/CartShop";
import Footer from "./Components/CarritoAndPago/Footer/Footer";
import NavBar from "./Components/CarritoAndPago/NavBar/NavBar";
import OnlineShopping from "./Components/Home/OnlineShopping";
//import PerfilUsuario from "./components/PerfilUsuario/PerfilUsuario";

const App = () => {
   return (
      <div>
         <Router>
            <NavBar />
            <Switch>
               <Route exact path="/">
                  <OnlineShopping />
                  <ProductoLista />
               </Route>
               <Route path="/Detail/:id">
                  <Detail />
               </Route>
               <Route exact path="/CartShop">
                  <CartShop />
               </Route>
               <Route exact path="/producto">
                  <ProductoLista />
               </Route>
               {/* <Route exact path="/PerfilUsuario">
                  <PerfilUsuario />
               </Route> */}
               <Route exact path="/servicio">
                  <ServicioLista />
               </Route>
               <Route path="/Detail/:id">
                  <Detail />
               </Route>
            </Switch>
            <Footer />
         </Router>
      </div>
   );
};

export default App;
