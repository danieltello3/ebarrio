import React, { useState } from "react";
import LoginCatch from "../../hooks/LoginCatch";
import {
   Container,
   CssBaseline,
   Typography,
   TextField,
   Grid,
   Button,
   Box,
   ThemeProvider,
   InputAdornment,
   IconButton,
} from "@material-ui/core";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const schema = yup.object().shape({
   email: yup
      .string()
      .required("el email es un campo obligatorio")
      .email("necesita ser un correo valido"),
   password: yup
      .string()
      .required("la contraseña es obligatorio")
      .min(6, "la contraseña debe tener al menos 6 caracteres"),
});

const theme = createTheme({
   overrides: {
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
   input: {
      marginTop: "20px",
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
      fontSize: "14px",
   },
   buttonCTA: {
      marginTop: "15px",
      padding: "15px 40px",
   },
}));

const Login = () => {
   const classes = useStyles();
   const [showPassword, setShowPassword] = useState(false);
   const { register, handleSubmit, errors } = useForm({
      mode: "onTouched",
      resolver: yupResolver(schema),
   });

   const { Form, handleChange, IniciarSesion } = LoginCatch();

   const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <Container component="main" maxWidth="sm">
         <CssBaseline>
            <ThemeProvider theme={theme}>
               <Box
                  boxShadow={2}
                  p={{ xs: 5 }}
                  borderRadius={16}
                  color="text.primary"
                  bgcolor="background.paper"
                  className={classes.contenedor}>
                  <Typography component="h2" variant="h4" color="primary">
                     Inicia Sesión
                  </Typography>
                  <form
                     className={classes.form}
                     onSubmit={handleSubmit(IniciarSesion)}
                     noValidate>
                     <Grid container spacing={2}>
                        <Grid item xs={12}>
                           <TextField
                              className={classes.input}
                              id="email"
                              name="email"
                              label="Correo Electronico"
                              variant="outlined"
                              autoComplete="email"
                              inputRef={register}
                              error={!!errors.email}
                              helperText={errors.email?.message}
                              required
                              fullWidth
                           />
                        </Grid>
                        <Grid item xs={12}>
                           <TextField
                              className={classes.input}
                              id="password"
                              name="password"
                              label="Contraseña"
                              variant="outlined"
                              autoComplete="current-password"
                              type={showPassword ? "text" : "password"}
                              inputRef={register}
                              error={!!errors.password}
                              helperText={errors.password?.message}
                              required
                              fullWidth
                              InputProps={{
                                 endAdornment: (
                                    <InputAdornment position="start">
                                       <IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowPassword}
                                          edge="end">
                                          {showPassword ? (
                                             <Visibility />
                                          ) : (
                                             <VisibilityOff />
                                          )}
                                       </IconButton>
                                    </InputAdornment>
                                 ),
                              }}
                           />
                        </Grid>
                     </Grid>
                     <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.buttonCTA}>
                        Iniciar Sesión
                     </Button>
                  </form>
               </Box>
            </ThemeProvider>
         </CssBaseline>
      </Container>
   );
};

export default Login;
