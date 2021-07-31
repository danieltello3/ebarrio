import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
   root: {
      display: "flex",
      "& > *": {
         margin: theme.spacing(1),
      },
   },
   large: {
      width: "130px",
      height: "130px",
   },
}));

export default function AvatarPerfil() {
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/8514763/pexels-photo-8514763.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className={classes.large}
         />
      </div>
   );
}
