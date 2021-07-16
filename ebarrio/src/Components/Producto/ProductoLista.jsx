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
import Producto from "./Producto";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Zoom } from "@material-ui/core";

const ProductosLista = [
   {
      titulo: "Las Traperas",
      descripcion: " Ropa de diseño,producto Nacional",
      costo: " S/.40.00",
      url: "https://www.lastraperas.com/static/tienda-online-ropa-mujer-b572120fb665c0b8b01807f6db9471ea.jpg",
      id: 1,
   },
   {
      titulo: "Arte en Tortas ",
      descripcion: "Deliciosas tortas tematicas ",
      costo: "S/.40.00",
      url: "https://i.pinimg.com/originals/65/f7/94/65f7944bdfc4e3b06ab281c91e3def0e.jpg",
      id: 2,
   },
   {
      titulo: "Comida Saludable",
      descripcion: "Comida Saludable y vive mas ",
      costo: " S/. 24.00",
      url: "https://cdn.shopify.com/s/files/1/1534/3917/files/21_1024x1024_crop_center.png?v=1599702179",
      id: 3,
   },
   {
      titulo: "Helados Artesanales",
      descripcion: "Productos naturales",
      costo: " S/.4.00",
      url: "https://portal.andina.pe/EDPfotografia3/Thumbnail/2018/01/31/000479352W.jpg",
      id: 4,
   },
   {
      titulo: "Chocotejas",
      descripcion: "Productos naturales",
      costo: " S/.20.00",
      url: "http://4.bp.blogspot.com/-rDSE5apY8cQ/T6nyteFU-rI/AAAAAAAAAM4/0ry4pFdJ9Vc/s1600/Cajas+para+regalo+de+chocotejas.JPG",
      id: 5,
   },
   {
      titulo: "Plantas",
      descripcion: "Plantitas Ornamnetales para casa  jkkrsfsgsh jjdjdjd",
      costo: " S/.20.00",
      url: "https://imgs-akamai.mnstatic.com/ff/df/ffdfd94dae95541a72b48f3282197e2b.jpg",
      id: 6,
   },
   {
      titulo: "Venta de Mascarilla",
      descripcion: " caja dee masarillas KN95",
      costo: " S/.20.00",
      url: "https://www.mercadoperu.com.pe/wp-content/uploads/classified-listing/2020/05/mascarillas-kn95-cusco.jpg",
      id: 7,
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

function ProductoLista(id) {
   const history = useHistory();
   const redirigir = (id) => {
      return history.push(`/Detail/${id}`);
   };

   // call  dbproductos
   //const {data:Producto,isLoading,error} = useFetch(
   //  "http://localhost:8000/Producto");

   return (
      <Box p={5}>
         <Grid container justify="center" spacing={4}>
            {ProductosLista.map(({ titulo, descripcion, costo, url, id }) => (
               <Grid key={id} items xs={12} sm={3}>
                  <Producto
                     url={url}
                     titulo={titulo}
                     costo={costo}
                     descripcion={descripcion}
                     redirigir={() => redirigir(id)}
                  />
               </Grid>
            ))}
         </Grid>
      </Box>
   );
}
export default ProductoLista;