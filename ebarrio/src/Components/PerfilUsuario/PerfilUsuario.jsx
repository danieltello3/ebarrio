import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import AddIcon from "@material-ui/icons/Add";
import {
   Link,
   Grid,
   useMediaQuery,
   Divider,
   Paper,
   Fab,
   Modal,
} from "@material-ui/core";
import ItemThumbnail from "./ItemThumbnail/ItemThumbnail";
import AvatarPerfil from "./Avatar";
import AddProduct from "./AddProduct";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Auth";
import { IconButton } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
// import firebase, { db } from "./../../firebase";

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`vertical-tabpanel-${index}`}
         aria-labelledby={`vertical-tab-${index}`}
         {...other}>
         {value === index && (
            <Box p={3}>
               <>{children}</>
            </Box>
         )}
      </div>
   );
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.any.isRequired,
   value: PropTypes.any.isRequired,
};

function tabProps(index) {
   return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
   };
}

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      flexDirection: "row",
      [theme.breakpoints.down("xs")]: {
         flexDirection: "column",
      },
      position: "relative",
   },
   tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
      minWidth: "200px",
   },
   container: {
      marginTop: "20px",
      height: "70%",
   },
   tabPanel: {
      flexGrow: 1,
   },
   header: {
      marginBottom: "20px",
   },
   extendedIcon: {
      marginRight: theme.spacing(1),
   },
   fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
   },
   input: {
      display: "none",
   },
}));

const PerfilUsuario = () => {
   const classes = useStyles();
   const [value, setValue] = React.useState(0);
   const { currentUser, setCurrentUser } = useContext(AuthContext);
   const history = useHistory();
   const [fileUpload, setFileUpload] = React.useState(null);
   const theme = useTheme();
   const currentBP = useMediaQuery(theme.breakpoints.down("xs"));
   //    let user = firebase.auth().currentUser;
   const [user, setUser] = React.useState("");
   const [datosUsuario, setDatosUsuario] = React.useState("");

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   const handleUploadPicture = (e) => {
      const data = e.target.files[0];
      setFileUpload(data);
   };

   const handleSubmitPhoto = async () => {
      await axios
         .post(
            "https://ebarrio.herokuapp.com/subirImagenPerfil?carpeta=usuarios",
            fileUpload,
            {
               headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                  "Content-Type": "multipart/form-data",
               },
            }
         )
         .then((respuesta) => {
            console.log(respuesta);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   useEffect(() => {
      async function fetchData() {
         await axios
            .get("https://ebarrio.herokuapp.com/perfil", {
               headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
               },
            })
            .then((respuesta) => {
               const data = respuesta.data.content;
               setUser(data);
            });
      }
      fetchData();
   }, [currentUser]);

   console.log(user);

   //    useEffect(() => {
   //       async function fetchData() {
   //          const snapshot = await db.collection("usuarios").doc(user.uid).get();
   //          const data = snapshot.data();
   //          setDatosUsuario(data);
   //       }
   //       fetchData();
   //    }, [user]);

   return (
      <Container maxWidth="lg" className={classes.container}>
         <Paper elevation={3}>
            <Grid
               container
               spacing={1}
               justifyContent="center"
               alignItems="center"
               className={classes.header}>
               <input
                  accept="image/*"
                  className={classes.input}
                  id="icon-button-file"
                  type="file"
                  onChange={(e) => handleUploadPicture(e)}
               />
               <label htmlFor="icon-button-file">
                  <IconButton
                     color="primary"
                     aria-label="upload picture"
                     component="span">
                     <PhotoCamera />
                  </IconButton>
               </label>

               <AvatarPerfil url={user.url} />
               <Typography variant="h2" color="primary">
                  {`Bienvenido ${user.usuarioNombre}`}
               </Typography>
            </Grid>
            <Divider />
            <div className={classes.root}>
               <Tabs
                  orientation={currentBP === true ? "horizontal" : "vertical"}
                  value={value}
                  variant="scrollable"
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="Vertical tabs example"
                  className={classes.tabs}>
                  <Tab label="datos personales" {...tabProps(0)} />
                  <Tab label="direcciones" {...tabProps(1)} />
                  <Tab
                     label={user.tipoId === 2 ? "PRODUCTOS" : "PEDIDOS"}
                     {...tabProps(2)}
                  />
               </Tabs>
               <TabPanel value={value} index={0} className={classes.tabPanel}>
                  <Grid container spacing={3}>
                     <Grid item xs={12}>
                        <Typography variant="h5" color="textPrimary">
                           Informacion de la cuenta
                        </Typography>
                        <hr />
                     </Grid>
                     <Grid item container xs={12}>
                        <Grid
                           item
                           container
                           spacing={1}
                           direction="column"
                           xs={4}
                           sm={3}
                           md={2}>
                           <Grid item>Nombre: </Grid>
                           <Grid item>Apellido: </Grid>
                           <Grid item>Email: </Grid>
                        </Grid>
                        <Grid
                           item
                           container
                           spacing={1}
                           direction="column"
                           xs={8}
                           sm={9}
                           md={10}>
                           <Grid item>{user.usuarioNombre}</Grid>
                           <Grid item>{user.usuarioApellido}</Grid>
                           <Grid item>{user.usuarioCorreo}</Grid>
                        </Grid>
                     </Grid>
                     <Grid item xs={12}>
                        <Link variant="button" color="secondary">
                           Cambiar Contraseña
                        </Link>
                     </Grid>
                  </Grid>
               </TabPanel>
               <TabPanel value={value} index={1} className={classes.tabPanel}>
                  <Grid container spacing={4}>
                     <Grid item xs={12}>
                        <Typography variant="h5" color="textPrimary">
                           Direcciones
                        </Typography>
                        <hr />
                     </Grid>
                     <Grid
                        item
                        container
                        direction="column"
                        xs={12}
                        md={6}
                        spacing={1}>
                        <Grid item>
                           <Typography variant="h6" color="primary">
                              Dirección de facturación
                           </Typography>
                        </Grid>
                        <Grid item>
                           {datosUsuario.nombre} {datosUsuario.apellido}
                        </Grid>
                        <Grid item>
                           {datosUsuario.direccionCampo1}{" "}
                           {datosUsuario.direccionNro} -{" "}
                           {datosUsuario.direccionInterior}
                        </Grid>
                        <Grid item>
                           {datosUsuario.distrito}, {datosUsuario.provincia},{" "}
                           {datosUsuario.departamento}
                        </Grid>
                        <Grid item>Perú</Grid>
                        <Grid item>T: {datosUsuario.telefono}</Grid>
                     </Grid>
                     <Grid
                        item
                        container
                        direction="column"
                        xs={12}
                        md={6}
                        spacing={1}>
                        <Grid item>
                           <Typography variant="h6" color="primary">
                              Dirección de envío
                           </Typography>
                        </Grid>
                        <Grid item>
                           {datosUsuario.nombre} {datosUsuario.apellido}
                        </Grid>
                        <Grid item>
                           {datosUsuario.direccionCampo1}{" "}
                           {datosUsuario.direccionNro} -{" "}
                           {datosUsuario.direccionInterior}
                        </Grid>
                        <Grid item>
                           {datosUsuario.distrito}, {datosUsuario.provincia},{" "}
                           {datosUsuario.departamento}
                        </Grid>
                        <Grid item>Perú</Grid>
                        <Grid item>T: {datosUsuario.telefono}</Grid>
                     </Grid>
                  </Grid>
               </TabPanel>
               {user.tipoId === 2 ? (
                  <TabPanel value={value} index={2}>
                     <Grid container spacing={3}>
                        <Grid item>
                           <ItemThumbnail />
                        </Grid>
                        <Grid item>
                           <ItemThumbnail />
                        </Grid>
                        <Grid item>
                           <ItemThumbnail />
                        </Grid>
                     </Grid>
                     <Fab
                        variant="extended"
                        color="secondary"
                        aria-label="agregar producto"
                        className={classes.fab}
                        onClick={() => history.push("/agregarProducto")}>
                        <AddIcon className={classes.extendedIcon} />
                        Agregar Producto
                     </Fab>
                  </TabPanel>
               ) : (
                  <TabPanel value={value} index={2}>
                     aquí saldrán los pedidos
                  </TabPanel>
               )}
            </div>
         </Paper>
      </Container>
   );
};

export default PerfilUsuario;
