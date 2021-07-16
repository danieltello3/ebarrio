import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PaymentIcon from "@material-ui/icons/Payment";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Service from "../../../../Assets/images/Servicio-de-gasfiteria-a-domicilio.jpg"
import Camion from "../../../../Assets/images/camion.svg"
import { lightGreen } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  skeler: {
    width: 20,
    padding: 2,
    borderRadius: 50,
    backgroundColor: lightGreen[500],
  },
  imPrin: {
    width: 250,
    margin: 10,
  },
  espaMen: {
    padding: 5,
  }
}));

const CarritoDeCompras = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Grid container direction="row" justify="space-around" alignItems="center">
        <AddShoppingCartIcon />
        <PaymentIcon />
        <CheckCircleOutlineOutlinedIcon />
      </Grid>
      <LinearProgress variant="determinate" value={33.3} />
      <Typography variant="h6" color="inherit" align="start" >
        CARRITO DE COMPRAS
      </Typography>
      <Divider />
      <br />

      <Grid container spacing={1} >
        <Grid item xs={3} >
          <Box>
            <div align="start">{/*INICIO DE DIV IMAGEN */}
              <img
                src={Service}
                alt="gasfiteria"
                class=""
                className={classes.imPrin}
              />
            </div>{/*FIN DE DIV IMAGEN */}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <div align="start">{/*INICIO DE DIV TEXTO */}
              <h4>GASFITERIA EN GENERAL</h4>
              <div>
                <p scope="col"><strike>S/ 129.90</strike><strong scope="col"> -28%</strong></p>
              </div>
              <p><strong>S/ 93.90</strong></p>
              <div>
                <Grid container spacing={1} >
                  <Grid item xs={1} >
                    <Box>
                      <p>
                        <img
                          src={Camion}
                          alt="camion"
                          class="rounded-circle"
                          className={classes.skeler}
                        />
                      </p>

                    </Box>
                  </Grid>
                  <Grid item xs={11} >
                    <Box>
                      <p>Trabajo estimado: 15 de abril</p>
                    </Box>
                  </Grid>
                </Grid>
              </div>
              <p className={classes.button}>Servicio Realizado por Pepe Lucho Casimiro</p>
            </div>{/*FIN DE DIV TEXTO */}
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box>
            <div align="end">{/*INICIO DE DIV BOTON*/}
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                variant="outlined"
                onClick={handleClick}>
                1
            <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>2</MenuItem>
                <MenuItem onClick={handleClose}>3</MenuItem>
                <MenuItem onClick={handleClose}>4</MenuItem>
              </Menu>
            </div>{/*FIN DE DIV BOTON*/}
          </Box>
        </Grid>
      </Grid>
      <div align="end" >
        <a href="#" className={classes.espaMen}>Guardar para después</a>
        <a href="#" className={classes.espaMen}>Eliminar</a>
      </div>
    </div>
  );
};

export default CarritoDeCompras;
