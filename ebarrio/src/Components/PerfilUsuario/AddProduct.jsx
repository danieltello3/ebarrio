import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
   paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "20px",
   },
   form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
}));

export default function AddProduct() {
   const classes = useStyles();
   const history = useHistory();
   const [productBody, setProductBody] = React.useState({});

   const crearProducto = async () => {
      try {
         const categoria = productBody.productoCategoria;
         const respuesta = await axios.post(
            "https://ebarrio.herokuapp.com/categorias",
            {
               categoriaNombre: categoria,
            }
         );
         const categoriaId = respuesta.data.content.categoriaId;
         productBody.productoCategoria = categoriaId;
         console.log(productBody);
         //  const nuevoProducto = await axios.post()
         history.push("/perfil");
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <Container component="main" maxWidth="xs" className={classes.paper}>
         <CssBaseline />
         <div>
            <Typography component="h1" variant="h5">
               Nuevo Producto
            </Typography>
            <form
               className={classes.form}
               onSubmit={(e) => {
                  e.preventDefault();
                  crearProducto();
               }}>
               <Grid container spacing={2}>
                  <Grid item xs={12}>
                     <TextField
                        name="nombre"
                        variant="outlined"
                        required
                        fullWidth
                        onChange={(e) => {
                           e.preventDefault();
                           setProductBody({
                              ...productBody,
                              productoNombre: e.target.value,
                           });
                        }}
                        id="productName"
                        label="Nombre"
                        autoFocus
                     />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="productCode"
                        label="codigo"
                        name="codigo"
                        onChange={(e) => {
                           e.preventDefault();
                           setProductBody({
                              ...productBody,
                              productoCodigo: e.target.value,
                           });
                        }}
                     />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="productPrice"
                        label="Precio"
                        name="precio"
                        type="number"
                        onChange={(e) => {
                           e.preventDefault();
                           setProductBody({
                              ...productBody,
                              productoPrecio: e.target.value,
                           });
                        }}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        variant="outlined"
                        required
                        fullWidth
                        multiline
                        maxRows={4}
                        name="descripcion"
                        label="Descripcion"
                        type="text"
                        id="productDescription"
                        onChange={(e) => {
                           e.preventDefault();
                           setProductBody({
                              ...productBody,
                              productoDescripcion: e.target.value,
                           });
                        }}
                     />
                  </Grid>
                  <Grid item xs={12}>
                     <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="productCategory"
                        label="Categoria"
                        name="categoria"
                        onChange={(e) => {
                           e.preventDefault();
                           setProductBody({
                              ...productBody,
                              productoCategoria: e.target.value,
                           });
                        }}
                     />
                  </Grid>
               </Grid>
               <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}>
                  Agregar Producto
               </Button>
            </form>
         </div>
      </Container>
   );
}
