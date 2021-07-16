import React from "react";
import {
   Container,
   CssBaseline,
   Typography,
   TextField,
   Grid,
   Button,
   Box,
   ThemeProvider,
   createTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const DbUrl = "http://localhost:8000/users";

const schema = yup.object().shape({
   nombre: yup.string().required("el nombre es obligatorio"),
   apellido: yup.string().required("el apellido es obligatorio"),
   email: yup
      .string()
      .required("el correo es obligatorio")
      .email("debe ser un correo valido"),
   password: yup.string().required("la contraseña es obligatoria").min(6),
   password2: yup.string().oneOf([yup.ref("password"), null]),
});

const theme = createTheme({
   overrides: {
      // Style sheet name
      MuiOutlinedInput: {
         root: {
            borderRadius: "25px",
         },
      },
   },
});
const useStyles = makeStyles((theme) => ({
   contenedor: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
   },
   form: {
      width: "100%",
      marginTop: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
   },
   button: {
      marginTop: "20px",
   },
}));
const Register = () => {
   const classes = useStyles();

   const { register, handleSubmit, errors } = useForm({
      mode: "onTouched",
      resolver: yupResolver(schema),
   });

   const onSubmit = (data) => {
      axios.post(DbUrl, data).catch((e) => {
         console.log(e);
      });
      alert("Usuario creado");
      window.location.href = "/";
   };

   return (
      <Container component="main" maxWidth="sm">
         <CssBaseline>
            <ThemeProvider theme={theme}>
               <Box
                  className={classes.contenedor}
                  boxShadow={2}
                  p={{ xs: 3 }}
                  color="text.primary"
                  bgcolor="background.paper"
                  borderRadius={16}>
                  <Typography component="h2" variant="h4" color="primary">
                     Crear cuenta
                  </Typography>
                  <form
                     className={classes.form}
                     onSubmit={handleSubmit(onSubmit)}
                     noValidate>
                     <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              id="nombres"
                              name="nombre"
                              label="Nombres"
                              variant="outlined"
                              autoComplete="name"
                              inputRef={register}
                              error={!!errors.nombre}
                              helperText={errors.nombre?.message}
                              required
                              fullWidth
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              id="apellidos"
                              name="apellido"
                              label="Apellidos"
                              variant="outlined"
                              autoComplete="lname"
                              inputRef={register}
                              error={!!errors.nombre}
                              helperText={errors.nombre?.message}
                              required
                              fullWidth
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                              id="email"
                              label="Correo Electronico"
                              variant="outlined"
                              name="email"
                              autoComplete="email"
                              type="email"
                              inputRef={register}
                              error={!!errors.nombre}
                              helperText={errors.nombre?.message}
                              required
                              fullWidth
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              id="password"
                              label="Contraseña"
                              variant="outlined"
                              autoComplete="current-password"
                              type="password"
                              name="password"
                              inputRef={register}
                              error={!!errors.nombre}
                              helperText={errors.nombre?.message}
                              required
                              fullWidth
                           />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <TextField
                              id="repeatPassword"
                              label="Repetir contraseña"
                              variant="outlined"
                              autoComplete="current-password"
                              type="password"
                              name="password2"
                              inputRef={register}
                              error={!!errors.nombre}
                              helperText={errors.nombre?.message}
                              required
                              fullWidth
                           />
                        </Grid>
                     </Grid>
                     <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}>
                        Registrarse
                     </Button>
                  </form>
               </Box>
            </ThemeProvider>
         </CssBaseline>
      </Container>
   );
};

export default Register;
