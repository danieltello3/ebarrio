import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CarritoDeCompras from "./Parts/CarritoDeCompras";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ResumenDeCompra from "./Parts/ResumenDeCompra";


const useStyles = makeStyles((theme) => ({

}));

const CartShop = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={1} >
        <Grid item xs={9} >
          <Box >
            <br/>
            <CarritoDeCompras />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <br/>
            <ResumenDeCompra />
          </Box>
        </Grid>
      </Grid>

    </div>
  );
};

export default CartShop;
