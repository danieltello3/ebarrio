import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
   },
   details: {
      display: "flex",
      flexDirection: "column",
   },
   content: {
      flex: "1 0 auto",
   },
   cover: {
      width: 151,
   },
   controls: {
      display: "flex",
      alignItems: "flex-end",
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(2),
   },
   playIcon: {
      height: 30,
      width: 30,
   },
}));

const ItemThumbnail = () => {
   const classes = useStyles();
   const theme = useTheme();

   return (
      <Card className={classes.root}>
         <div className={classes.details}>
            <CardContent className={classes.content}>
               <Typography component="h5" variant="h5">
                  Titulo del producto
               </Typography>
               <Typography variant="subtitle1" color="textSecondary">
                  descripcion
               </Typography>
            </CardContent>
            <div className={classes.controls}>
               <AttachMoneyIcon className={classes.playIcon} />
               <Typography variant="h6">40.00</Typography>
            </div>
         </div>
         <CardMedia
            className={classes.cover}
            image="https://images.pexels.com/photos/7175548/pexels-photo-7175548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            title="Foto de producto"
         />
      </Card>
   );
};

export default ItemThumbnail;
