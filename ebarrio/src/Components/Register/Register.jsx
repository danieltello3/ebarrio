import React, { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
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
import "./styles.css";
import { useHistory } from "react-router-dom";

const MySwal = withReactContent(Swal);

function Copyright() {
   return (
      <Typography variant="body2" color="textSecondary" align="center">
         {"Copyright © "}
         <Link
            color="inherit"
            href="https://youtu.be/Z9cVv-02QFE"
            target="_blank">
            Ebarrio
         </Link>{" "}
         {new Date().getFullYear()}
         {"."}
      </Typography>
   );
}

const useStyles = makeStyles((theme) => ({
   root: {
      //backgroundImage:'url(http://www.equipoplastico.com/wp-content/uploads/2009/11/ep-lima-chicha23.jpg)',
      background: "Grey",
      borderRadius: "5%",
      border: "5px",
      borderColor: "grey",
   },
   paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
   },
   avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
   },
   form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
}));

export default function SignUp() {
   const [registerForm, setRegisterForm] = React.useState({});
   const history = useHistory();

   const handleRegistro = async () => {
      console.log(registerForm);
      try {
         await axios
            .post("https://ebarrio.herokuapp.com/registro", registerForm)
            .then((respuesta) => {
               if (respuesta.status === 201) {
                  MySwal.fire({
                     icon: "success",
                     title: "Usuario creado exitosamente",
                  }).then(() => history.push("/login"));
               }
            });
      } catch (error) {
         console.log(error);
         MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error}`,
         });
      }
   };

   const classes = useStyles();
   return (
      <div>
         <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
               <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">
                  Sign up
               </Typography>
               <form className={classes.form} noValidate>
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           autoComplete="fname"
                           name="firstName"
                           variant="outlined"
                           required
                           fullWidth
                           id="firstName"
                           label="Nombres"
                           autoFocus
                           onChange={(e) => {
                              setRegisterForm({
                                 ...registerForm,
                                 usuarioNombre: e.target.value,
                              });
                           }}
                        />
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           variant="outlined"
                           required
                           fullWidth
                           id="lastName"
                           label="Apellidos"
                           name="lastName"
                           autoComplete="lname"
                           onChange={(e) => {
                              setRegisterForm({
                                 ...registerForm,
                                 usuarioApellido: e.target.value,
                              });
                           }}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           variant="outlined"
                           required
                           fullWidth
                           id="email"
                           label="Correo"
                           name="email"
                           autoComplete="email"
                           onChange={(e) => {
                              setRegisterForm({
                                 ...registerForm,
                                 usuarioCorreo: e.target.value,
                              });
                           }}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           variant="outlined"
                           required
                           fullWidth
                           name="password"
                           label="Contrasena"
                           type="password"
                           id="password"
                           autoComplete="current-password"
                           onChange={(e) => {
                              setRegisterForm({
                                 ...registerForm,
                                 usuarioPassword: e.target.value,
                              });
                           }}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <FormControlLabel
                           control={
                              <Checkbox
                                 value="vendedor"
                                 color="primary"
                                 onChange={(e) => {
                                    console.log(e.target.checked);
                                    if (e.target.checked === true) {
                                       setRegisterForm({
                                          ...registerForm,
                                          tipoId: 2,
                                       });
                                    } else {
                                       setRegisterForm({
                                          ...registerForm,
                                          tipoId: 3,
                                       });
                                    }
                                 }}
                              />
                           }
                           label="Soy vendedor"
                        />
                     </Grid>
                  </Grid>
                  <Button
                     fullWidth
                     variant="contained"
                     color="primary"
                     className={classes.submit}
                     onClick={() => handleRegistro()}>
                     Registarme
                  </Button>
                  <Grid container justifyContent="flex-end">
                     <Grid item>
                        <Link href="/Login" variant="body2">
                           Ya tienes cuenta? Inicia Session
                        </Link>
                     </Grid>
                  </Grid>
               </form>
            </div>
            <Box mt={5}>
               <Copyright />
            </Box>
         </Container>
      </div>
   );
}
