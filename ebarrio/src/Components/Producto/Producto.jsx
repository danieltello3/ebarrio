import React  from 'react'
import {useHistory} from "react-router-dom"
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import  "./Producto.css"
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box"
import { shadows } from '@material-ui/system';
const usarEstilos = makeStyles((theme) => ({

  root: {
    //background: 'linear-gradient(48deg, #edeff7 20%, #7986CB 70%)',
    borderColor:'#96acb0' ,
    borderRadius:10,
    backgroundColor: '#045de9',
    backgroundImage: 'linear-gradient(315deg, #045de9 0%, #09c6f9 74%)',
  },
  media: {
    height: 160,
    margin:4,
    borderRadius:10,
  },

 

}));

function Producto({titulo,descripcion,costo, redirigir,url,id}) {
  
  const [value, setValue] = React.useState('recents');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const clases = usarEstilos();
  return (
    <Box p={4} boxShadow={0} spacing ={2}  bgcolor="background.paper"   >
  <Card className={clases.root} spacing ={4} onChange={handleChange}  value={value}>
   <CardActionArea>
     <CardMedia
        className={clases.media}
         image={url}
        title="imagen"/>

    <CardContent>
      <Typography gutterBottom variant="h5" component="h3">
       {titulo}
       </Typography>
         <Typography variant="body2" color="textSecondary" component="p"   >
          <Box component="div"  
        my={2}
        textOverflow="ellipsis"
        overflow="hidden"
          >
            <Typography>
            {descripcion}
            </Typography>
             

          </Box>
         
         </Typography>
        <Typography variant="body2" variant="h5" color="textPrimary" component="p" >
        <p>{costo}</p>
        </Typography> 
        </CardContent>
       <CardActions> 
       <Button   variant="contained" disableElevation  color="primary" onClick={()=>redirigir(id)} > 
         Ir Detalle
         </Button>
    </CardActions>
     </CardActionArea>  
     </Card>
   </Box>
  )
}
Producto.prototype = {
  title: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string
};


export default Producto


 