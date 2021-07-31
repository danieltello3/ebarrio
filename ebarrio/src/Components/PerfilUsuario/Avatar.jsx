import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      "& > *": {
         margin: theme.spacing(1),
      },
      flexDirection: "row",
   },
   large: {
      width: "130px",
      height: "130px",
      marginRight: "70px",
   },
   input: {
      display: "none",
   },
}));

export default function AvatarPerfil() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
         />
         <label htmlFor="icon-button-file">
            <IconButton
               color="primary"
               aria-label="upload picture"
               component="span">
               <PhotoCamera />
            </IconButton>
         </label>
         <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/8514763/pexels-photo-8514763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className={classes.large}
         />
      </div>
   );
}
