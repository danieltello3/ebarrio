import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";
//import Detail from "../Detail/Detail"
//import useFetch from "../../../src/hooks/useFetch/useFetch";
//import dbProducto from "../../../data/db.json"
import Servicio from "./Servicio";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Zoom } from "@material-ui/core";
import servicio from "./Servicio";

const ServiciossLista = [
   {
      titulo: "Albañil",
      descripcion: "Servicio de Albanil",
      costo: " S/.50.00",
      url: "https://www.servihogar-ecija.com/wp-content/uploads/2019/11/trabajos-de-albaileria.jpg",
      id: 9,
   },
   {
      titulo: "Gasfitero",
      descripcion: "Servicio de Gasfitero ",
      costo: "S/.30.00",
      url: "https://negocio.pe/sites/negocio.logicaldesign.pe/files/styles/maxima_imagen/public/plomero1_0.jpg?itok=duWQfoiZ",
      id: 10,
   },
   {
      titulo: "Cocina Virtual",
      descripcion: "Comida Saludable y vive mas ",
      costo: " S/. 120.00",
      url: "https://cdn.euroinnova.edu.es/img/subidasEditor/fotolia_65080912_subscription_xxl-1558514421.jpg",
      id: 11,
   },
   {
      titulo: "Servicio de Limpieza",
      descripcion: "Productos naturales",
      costo: " S/.50.00",
      url: "https://www.adecco.com.pe/wp-content/uploads/2021/03/servicios-de-limpieza.jpg",
      id: 12,
   },
];

const clase = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      width: "100vw",
      height: "100vh",
   },
   paper: {
      height: 140,
      width: 100,
   },
   control: {
      padding: theme.spacing(2),
   },

   principal: {
      flexGrow: 3,
      flexDirection: "row",
      flexWrap: "wrap",
      paddingLeft: "40px",
      marginBottom: "10px",
   },
   GridContainer: {
      paddingLeft: "40px",
      paddingRight: "10px",
   },

   controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
   },
}));

function ServicioLista(id) {
   const history = useHistory();
   const redirigir = (id) => {
      return history.push(`/Detail/${id}`);
   };

   // call  dbproductos
   //const {data:Producto,isLoading,error} = useFetch(
   //  "http://localhost:8000/Producto");

   return (
      <Box p={5}>
         <Grid container justifyContent="center" spacing={4}>
            {ServiciossLista.map(({ titulo, descripcion, costo, url, id }) => (
               <Grid key={id} items xs={12} sm={3}>
                  <Servicio
                     url={url}
                     titulo={titulo}
                     precio={costo}
                     descripcion={descripcion}
                     redirigir={() => redirigir(id)}
                  />
               </Grid>
            ))}
         </Grid>
      </Box>
   );
}
export default ServicioLista;
