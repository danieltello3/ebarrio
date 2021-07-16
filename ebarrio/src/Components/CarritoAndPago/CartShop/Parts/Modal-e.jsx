import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import InputBase from '@material-ui/core/InputBase';
import visa from '../../../../Assets/images/visa.svg';
import mastercard from '../../../../Assets/images/tarjeta-mastercard.svg';
import amex from '../../../../Assets/images/amex.svg';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#e0e0dd',
    border: '2px solid #e0e0e0',
    boxShadow: theme.shadows[2],
    //padding: theme.spacing(1, 10, 1),/*arrib,ancho,abaj*/
  },
  marck:{
    //padding: 50,
    width:300,
    height:450,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '50%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  skeler: {
    width: 30, 
  },
  pay:{
    backgroundColor: '#616161',
    borderRadius:5,
    border: '1px solid #e0e0dd',
    paddingLeft:8,
  },
  form:{
    maxWidth:200,
    marginLeft:50,
    marginRight:50,
  }
}));

const Modalex = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div align="center">
        <Button variant="contained" color="primary" type="button" onClick={handleOpen}>
          Procesar Compra
            </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 1500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper} >
              <div className={classes.marck}>
                    
                      <Box justifyContent="flex-start" display="flex" >
                        <Box  px={1} >
                        <p>ENG</p>
                        </Box>
                        <Box px={1} flexGrow={1}>
                        <p>ESP</p>
                        </Box>
                        <Box >
                        <Button>X</Button>
                        </Box>
                      </Box>
                    
                        <div align="center">
                          <h4>ECOMMER EBARRIO</h4>
                        </div>

                        <div id="payment" className={classes.form} >
                          <form>
                            <div  id="card-number-field" align="center">
                              <InputBase type="text"  id="cardNumber" placeholder="Numero de tarjeta" align="center" className={classes.pay}/>
                            </div>
                            <br />

                            <div id="mesandcvv" align="center">
                              <Grid container spacing={1}>
                                <Grid item xs={6}>
                                  <InputBase type="text" id="mes" placeholder="MM/AA" className={classes.pay}/>
                                </Grid>
                                <Grid item xs={6}>
                                  <InputBase type="text" id="cvv" placeholder="CVV" className={classes.pay}/>
                                </Grid>
                              </Grid>
                            </div>
                            <br />
                            <div id="mesandcvv" align="center">
                              <Grid container spacing={1}>
                                <Grid item xs={6}>
                                <InputBase type="text" id="nombre" placeholder="Nombre" className={classes.pay}/>
                                </Grid>
                                <Grid item xs={6}>
                                <InputBase type="text"  id="apellido" placeholder="Apellido" className={classes.pay}/>
                                </Grid>
                              </Grid>
                            </div>
                            <br />
                            <div  id="email" align="center">
                              <InputBase type="email"  id="email" placeholder="Email" className={classes.pay}/>
                            </div>
                          </form>
                        </div>
                            <br />

                            <div id="pay-now" align="center">
                              <Button variant="contained" color="secondary" id="confirm-purchase">
                              Pagar S/ 103.90
                                </Button>
                            </div>
                            {/*
                              <div class="d-flex justify-content-center">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <a href="./index2.html" type="button" class="btn btn-warning btn-lg text-white">
                                  Pagar S/ 103.90
                                </a>
                              </div>*/ }
                            <br />
                            <div id="credit_cards" align="end">
                              <img src={visa} id="visa" className={classes.skeler}/>
                              <img src={mastercard} id="mastercard" className={classes.skeler}/>
                              <img src={amex} id="amex" className={classes.skeler}/>
                            </div>
                          
              </div>
            </div>
          </Fade>
        </Modal>
      </div>


    </div>
  )
}

export default Modalex
