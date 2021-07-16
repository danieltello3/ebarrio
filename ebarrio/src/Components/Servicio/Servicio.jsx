import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Servicio({titulo,descripcion,precio, redirigir,url,id}) {
  const classes = useStyles();

  return (
 <Box p={5}>
<Grid className={classes.root} spacing ={5} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={url}
          title="imagen servicio"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descripcion}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    
      <CardActions> 
       <Button   variant="contained" disableElevation  color="primary" onClick={()=>redirigir(id)} > 
         Ir Detalle
         </Button>
    </CardActions>
    </Grid>
 </Box>
    
  );
}