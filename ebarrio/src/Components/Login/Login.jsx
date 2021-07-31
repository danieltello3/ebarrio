import React, { useContext } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../Auth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useHistory } from "react-router-dom";

const MySwal = withReactContent(Swal);

function Copyright() {
   return (
      <Typography variant="body2" color="textSecondary" align="center">
         {"Copyright © "}
         <Link color="inherit" href="https://youtu.be/Z9cVv-02QFE">
            Ebarrio
         </Link>{" "}
         {new Date().getFullYear()}
         {"."}
      </Typography>
   );
}

const useStyles = makeStyles((theme) => ({
   root: {
      height: "100vh",
   },
   image: {
      backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
         theme.palette.type === "light"
            ? theme.palette.grey[50]
            : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
   },
   paper: {
      margin: theme.spacing(8, 4),
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
      marginTop: theme.spacing(1),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
}));

export default function SignInSide() {
   const classes = useStyles();
   const [loginForm, setLoginForm] = React.useState({});
   const { currentUser, setCurrentUser } = useContext(AuthContext);
   const history = useHistory();
   const handleLogin = async () => {
      console.log(loginForm);
      try {
         await axios
            .post("https://ebarrio.herokuapp.com/login", loginForm)
            .then((respuesta) => {
               if (respuesta.status === 200) {
                  const token = respuesta.data.content;
                  setCurrentUser(true);
                  localStorage.setItem("token", token);
               }
            })
            .then(() => history.push("/perfil"));
      } catch (error) {
         MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error}`,
         });
      }
   };

   return (
      <Grid container component="main" className={classes.root}>
         <CssBaseline />
         <Grid item xs={false} sm={4} md={7} className={classes.image} />
         <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square>
            <div className={classes.paper}>
               <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">
                  Ingresar
               </Typography>
               <form className={classes.form} noValidate>
                  <TextField
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     id="email"
                     label="Correo"
                     name="email"
                     autoComplete="email"
                     autoFocus
                     onChange={(e) => {
                        setLoginForm({ ...loginForm, email: e.target.value });
                     }}
                  />
                  <TextField
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     name="password"
                     label="Contrasena"
                     type="password"
                     id="password"
                     autoComplete="current-password"
                     onChange={(e) => {
                        setLoginForm({
                           ...loginForm,
                           password: e.target.value,
                        });
                     }}
                  />

                  <Button
                     fullWidth
                     variant="contained"
                     color="primary"
                     className={classes.submit}
                     onClick={() => handleLogin()}>
                     Ingresar
                  </Button>
                  <Grid container>
                     <Grid item xs>
                        <Link href="#" variant="body2"></Link>
                     </Grid>
                     <Grid item>
                        <Link href="/Register" variant="body2">
                           No tienes una cuenta? Registrarse
                        </Link>
                     </Grid>
                  </Grid>
                  <Box mt={5}>
                     <Copyright />
                  </Box>
               </form>
            </div>
         </Grid>
      </Grid>
   );
}
