import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import useFetch from "../../hooks/useFetch/useFetch";
import Producto from "../Producto/Producto";
//import Producto from "./Producto";
import { useParams, useHistory } from "react-router-dom";

const url = "http://localhost:8000/ProductoLista";
const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      padding: "20px",
      width: "60%",
      paddingTop: theme.spacing(3),
      margin: "auto",
   },
   details: {
      display: "flex",
      flexDirection: "column",
      width: 650,
      height: 350,
   },
   content: {
      flex: "1 0 auto",
      width: 500,
      height: 350,
   },
   cover: {},
   controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(24),
      paddingBottom: theme.spacing(3),
      marginLeft: "10px",
   },
   playIcon: {
      height: 104,
      width: 100,
   },
}));

export default function Detail() {
   const classes = useStyles();
   const { id } = useParams();
   const { data: Productos, isLoading, error } = useFetch(`${url}/${id}`);
   const history = useHistory();

   return (
      <Grid>
         <Card className={classes.root}>
            <CardMedia
               className={classes.content}
               image='https://inesdecominges.files.wordpress.com/2015/02/selfie-canguro-buena.jpg?w=640&h=510&crop=1'
               title="imagen"
            />
            <CardContent className={classes.details}>
               <Typography component="h4" variant="h4">
                  Medias
               </Typography>
               <Typography variant="subtitle1" color="textSecondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id itaque vitae minima ratione hic, tempora dolor magni dolores impedit dignissimos quod doloribus sit expedita ullam cumque qui deleniti iure alias.
               </Typography>
               <Typography variant="subtitle1" color="textPrimary">
                  S./92.30
               </Typography>
            </CardContent>
            <CardActions>
               <Button variant="contained" disableElevation color="primary">
                  Pagar
               </Button>
            </CardActions>
         </Card>
      </Grid>
   );
}
