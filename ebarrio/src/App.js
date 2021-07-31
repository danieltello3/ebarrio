import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./Components/Detail/Detail";
import ProductoLista from "./Components/Producto/ProductoLista";
import ServicioLista from "./Components/Servicio/ServicioLista";
import CartShop from "./Components/CarritoAndPago/CartShop/CartShop";
import Footer from "./Components/CarritoAndPago/Footer/Footer";
import NavBar from "./Components/CarritoAndPago/NavBar/NavBar";
import OnlineShopping from "./Components/Home/OnlineShopping";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import "./App.css";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { indigo } from "@material-ui/core/colors";
import { grey } from "@material-ui/core/colors";
import PerfilUsuario from "./Components/PerfilUsuario/PerfilUsuario";
import AddProduct from "./Components/PerfilUsuario/AddProduct";

const theme = createTheme({
   palette: {
      primary: {
        main: '#3949ab',
      },
      secondary:{
         main: grey[900],
       },
    },
 });

const App = () => {
   return (
      <div>
         <ThemeProvider theme={theme}>
         <Router>
            <NavBar />
            <Switch>
               <Route exac path="/Login">
                  <Login />
               </Route>
               <Route exac path="/Register">
                  <Register />
               </Route>
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
               <Route exact path="/perfil">
                  <PerfilUsuario />
               </Route>
               <Route exact path="/agregarProducto">
                  <AddProduct />
               </Route>
               <Route exact path="/servicio">
                  <ServicioLista />
               </Route>
               <Route path="/Detail/:id">
                  <Detail />
               </Route>
            </Switch>
            <Footer />
         </Router>
         </ThemeProvider>
      </div>
   );
};

export default App;
