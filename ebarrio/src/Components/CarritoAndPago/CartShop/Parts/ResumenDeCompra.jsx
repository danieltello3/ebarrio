import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { Box, Divider, Grid } from "@material-ui/core";
import Modalex from "./Modal-e";
const Grey = grey[300];

const useStyles = makeStyles((theme) => ({
   prin: {
      margin: 10,
      //paddingRight: 30,
      //paddingLeft:30,
   },
   ReComp: {
      marginRight: 30,
      marginLeft: 30,
      margin: 10,
   },
   TeComp: {
      marginLeft: 30,
      marginRight: 30,
   },
}));

const ResumenDeCompra = () => {
   const classes = useStyles();
   return (
      <div>
         <Grid>
            <Box border={1} borderColor="grey.300" className={classes.prin}>
               <div>
                  <div>
                     <h4 class="text-center">RESUMEN DE TU PEDIDO</h4>
                     <div>
                        <Divider className={classes.ReComp} />
                        <div className={classes.TeComp}>
                           <Grid
                              container
                              direction="row"
                              justifyContent="space-between">
                              <p>Subtotal (1)</p>
                              <p>
                                 <strong>S/ 93.90</strong>
                              </p>
                           </Grid>
                        </div>
                        <Divider className={classes.ReComp} />
                        <div className={classes.TeComp}>
                           <Grid
                              container
                              direction="row"
                              justifyContent="space-between">
                              <p>Envio</p>
                              <p>
                                 <strong>S/ 9.90</strong>
                              </p>
                           </Grid>
                        </div>
                        <Divider className={classes.ReComp} />
                        <div className={classes.TeComp}>
                           <a href="#" class="text-warning">
                              Calcular Envio
                           </a>
                        </div>
                        <Divider className={classes.ReComp} />
                        <div className={classes.TeComp}>
                           <a href="#" class="text-warning">
                              Aplicar Cupón
                           </a>
                        </div>
                        <Divider className={classes.ReComp} />
                        <div className={classes.TeComp}>
                           <Grid
                              container
                              direction="row"
                              justifyContent="space-between">
                              <strong>TOTAL</strong>
                              <strong>S/ 103.90</strong>
                           </Grid>
                        </div>
                        <Divider className={classes.ReComp} />
                        <div>
                           {/* Modal */}
                           <Modalex />
                           {/*FIN DE MODAL*/}
                        </div>
                        <Divider className={classes.ReComp} />
                     </div>
                  </div>
               </div>
            </Box>
         </Grid>
      </div>
   );
};

export default ResumenDeCompra;
