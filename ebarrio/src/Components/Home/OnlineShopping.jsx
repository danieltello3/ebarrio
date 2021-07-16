import React from "react";
import Grid from "@material-ui/core/Grid";
import comercio from "./../../Assets/images/undraw_business_shop_qw5t.svg";
import fotografia from "./../../Assets/images/undraw_fashion_photoshoot_mtq8.svg";
import { Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   image: {
      height: "450px",
      padding: "20px",
   },
   container: {
      marginTop: "50px",
   },
   titulo: {
      marginBottom: "20px",
   },
   gridContainer: {
      marginTop: "200px",
      backgroundColor: theme.palette.primary.light,
   },
}));
const OnlineShopping = () => {
   const classes = useStyles();
   return (
      <>
         <Container
            maxWidth="lg"
            className={classes.container}
            disableGutters={true}>
            <Grid
               container
               spacing={1}
               direction="row"
               justify="center"
               alignItems="center"
               alignContent="center">
               <Grid item xs={6}>
                  <Typography
                     variant="h3"
                     color="primary"
                     className={classes.titulo}>
                     Apoya a los comercios locales
                  </Typography>
                  <Typography variant="body1" color="initial">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Maxime ducimus repudiandae et soluta atque sequi quasi
                     dignissimos? Vero atque, eveniet quibusdam repellendus
                     suscipit sunt et pariatur laborum temporibus in libero.
                  </Typography>
               </Grid>
               <Grid item xs={6}>
                  <img
                     src={comercio}
                     alt="comercio local"
                     className={classes.image}
                  />
               </Grid>
            </Grid>
         </Container>
         <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
            alignContent="center"
            className={classes.gridContainer}>
            <Container maxWidth="lg" className={classes.container}>
               <Grid
                  container
                  spacing={1}
                  direction="row"
                  justify="center"
                  alignItems="center"
                  alignContent="center">
                  <Grid item xs={6}>
                     <img
                        src={fotografia}
                        alt="comercio local"
                        className={classes.image}
                     />
                  </Grid>
                  <Grid item xs={6}>
                     <Typography
                        variant="h3"
                        color="inherit"
                        className={classes.titulo}>
                        Apoya a los independientes
                     </Typography>
                     <Typography variant="body1" color="initial">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Maxime ducimus repudiandae et soluta atque sequi
                        quasi dignissimos? Vero atque, eveniet quibusdam
                        repellendus suscipit sunt et pariatur laborum temporibus
                        in libero.
                     </Typography>
                  </Grid>
               </Grid>
            </Container>
         </Grid>
      </>
   );
};

export default OnlineShopping;
