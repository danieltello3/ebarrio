import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import { AuthContext } from "../../../Auth";

const useStyles = makeStyles((theme) => ({
   menuButton: {
      marginRight: theme.spacing(2),
   },
   search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "rgba(255,255,255,0.2)",
      "&:hover": {
         backgroundColor: "rgba(255,255,255,0.4)",
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("md")]: {
         width: 500,
      },
   },
   searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#000",
   },
   inputRoot: {
      color: "#000",
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "50%",
      [theme.breakpoints.up("md")]: {
         width: "20ch",
      },
   },
   root: {
      //145 o 325
      background:
         "linear-gradient(325deg, #61F908 15%, #FFFF00 40%, #FFAA00 55%, #FF007A 85% )",
      //backgroundImage:'url(https://upload.wikimedia.org/wikipedia/commons/6/62/Carteles_chicha.jpg)',
      backgroundSize: "100%",
      borderColor: "#96acb0",
   },
}));

const NavBar = () => {
   const classes = useStyles();
   const history = useHistory();
   const { currentUser, setCurrentUser } = useContext(AuthContext);
   const [anchorEl, setAnchorEl] = React.useState(null);

   const logOut = () => {
      setCurrentUser(false);
      localStorage.removeItem("token");
      history.push("/");
   };

   const handleClickMenu = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleCloseMenu = () => {
      setAnchorEl(null);
   };

   return (
      <div>
         <AppBar position="static" className={classes.root}>
            <Toolbar>
               <Typography
                  className={classes.colorN}
                  variant="h5"
                  onClick={() => history.push("/")}>
                  Ebarrio
               </Typography>
               <div style={{ width: "100%" }}>
                  <Box display="flex" flexDirection="row" alignContent="center">
                     <Box p={2} flexGrow={1} order={1}>
                        <Box
                           display="flex"
                           flexDirection="row"
                           alignContent="center">
                           <Box>
                              <Button
                                 className={classes.colorN}
                                 aria-controls="simple-menu"
                                 aria-haspopup="true"
                                 onClick={handleClickMenu}
                                 color="secondary">
                                 Menu
                              </Button>
                              <Menu
                                 id="simple-menu"
                                 anchorEl={anchorEl}
                                 keepMounted
                                 open={Boolean(anchorEl)}
                                 onClose={handleCloseMenu}>
                                 <MenuItem
                                    onClick={() => history.push("/producto")}>
                                    Productos
                                 </MenuItem>
                                 <MenuItem
                                    onClick={() => history.push("/servicio")}>
                                    Servicios
                                 </MenuItem>
                                 <MenuItem onClick={handleCloseMenu}>
                                    Otros
                                 </MenuItem>
                              </Menu>
                           </Box>
                           <Box>
                              <div className={classes.search}>
                                 <div className={classes.searchIcon}>
                                    <SearchIcon />
                                 </div>
                                 <InputBase
                                    placeholder="Search…"
                                    classes={{
                                       root: classes.inputRoot,
                                       input: classes.inputInput,
                                    }}
                                    inputProps={{ "aria-label": "search" }}
                                 />
                              </div>
                           </Box>
                        </Box>
                     </Box>

                     {!!currentUser ? (
                        <>
                           <Box p={1} order={4}>
                              <IconButton
                                 aria-label="show 4 new shops"
                                 color="secondary"
                                 onClick={() => history.push("/CartShop")}>
                                 <Badge badgeContent={1} color="secondary">
                                    <ShoppingCartOutlinedIcon />
                                 </Badge>
                              </IconButton>
                           </Box>
                           <Box p={1} order={5}>
                              <IconButton
                                 aria-label="account of current user"
                                 aria-controls="menu-appbar"
                                 aria-haspopup="true"
                                 onClick={() => history.push("/perfil")}
                                 color="secondary">
                                 <AccountCircle />
                              </IconButton>
                              <IconButton
                                 aria-label="Cerrar sesion"
                                 onClick={logOut}
                                 color="secondary">
                                 <ExitToAppIcon />
                              </IconButton>
                           </Box>
                        </>
                     ) : (
                        <>
                           <Box p={2} order={2}>
                              <Button
                                 color="secondary"
                                 onClick={() => history.push("/Login")}>
                                 Ingresar
                              </Button>
                           </Box>

                           <Box p={2} order={3}>
                              <Button
                                 color="secondary"
                                 onClick={() => history.push("/Register")}>
                                 Registrarme
                              </Button>
                           </Box>
                        </>
                     )}
                  </Box>
               </div>
            </Toolbar>
         </AppBar>
      </div>
   );
};

export default NavBar;
