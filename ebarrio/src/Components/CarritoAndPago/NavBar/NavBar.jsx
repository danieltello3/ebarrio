import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { Modal } from "@material-ui/core";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";


const useStyles = makeStyles((theme) => ({
   menuButton: {
      marginRight: theme.spacing(2),
   },
   modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
   },
   search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.20),
      "&:hover": {
         backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("md")]: {
         //marginLeft: theme.spacing(3),
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
   },
   inputRoot: {
      color: "inherit",
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
      //background: 'linear-gradient(325deg, #61F908 15%, #FFFF00 40%, #FFAA00 55%, #FF007A 85% )',
      //backgroundImage:'url(https://upload.wikimedia.org/wikipedia/commons/6/62/Carteles_chicha.jpg)',
      backgroundSize: '100%',
      borderColor:'#96acb0' ,
      
    },
    


}));
const NavBar = () => {
   const classes = useStyles();
   const history = useHistory();
   const [auth, setAuth] = React.useState(true);
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [openLogin, setOpenLogin] = React.useState(false);
   const [openRegister, setOpenRegister] = React.useState(false);
   const [anchorElUser, setAnchorElUser] = React.useState(null);
   const [open, setOpen] = React.useState(false);
   const anchorRef = React.useRef(null);
   const openUser = Boolean(anchorElUser);

   const handleChange = (event) => {
      setAuth(event.target.checked);
   };

   const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
   };

   function handleListKeyDown(event) {
      if (event.key === "Tab") {
         event.preventDefault();
         setOpen(false);
      }
   }

   const prevOpen = React.useRef(open);
   React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
         anchorRef.current.focus();
      }

      prevOpen.current = open;
   }, [open]);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const handleOpenModalLogin = () => {
      setOpenLogin(true);
   };

   const handleCloseModalLogin = () => {
      setOpenLogin(false);
   };
   const handleOpenModalRegister = () => {
      setOpenRegister(true);
   };

   const handleCloseModalRegister = () => {
      setOpenRegister(false);
   };
   const handleMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };
   const handleCloseUser = () => {
      setAnchorElUser(null);
   };

   return (
      <div>
         <AppBar position="static" className={classes.root}>
            <Toolbar >
               <Typography variant="h6" onClick={() => history.push("/")}>
                  Ebarrio
               </Typography>
               <div style={{ width: "100%" }}>
                  <Box display="flex">
                     <Box p={1} flexGrow={1} order={1} ml>
                        <Box display="flex" flexDirection="row">
                           <Box>
                              <Button
                                 aria-controls="simple-menu"
                                 aria-haspopup="true"
                                 onClick={handleClick}
                                 color="initial">
                                       Menu
                              </Button>

                              <Menu
                                 id="simple-menu"
                                 anchorEl={anchorEl}
                                 keepMounted
                                 open={Boolean(anchorEl)}
                                 onClose={handleClose}>
                                 <MenuItem
                                    onClick={() => history.push("/producto")}>
                                    Productos
                                 </MenuItem>
                                 <MenuItem
                                    onClick={() => history.push("/servicio")}>
                                    Servicios
                                 </MenuItem>
                                 <MenuItem onClick={handleClose}>
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

                     <Box p={1} order={2}>
                        <Button color="inherit"
                         onClick={() => history.push("/Login")}>
                           Ingresar
                        </Button>
                        <Modal
                           className={classes.modal}
                           open={openLogin}
                           onClose={handleCloseModalLogin}>
                           <Login />
                        </Modal>
                     </Box>

                     <Box p={1} order={3}>
                        <Button
                           color="secondary"
                           onClick={() => history.push("/Register")}>
                           Registrarme
                        </Button>
                        <Modal
                           //className={classes.modal}
                           //open={openRegister}
                           //onClose={handleCloseModalRegister}
                           >
                           <Register />
                        </Modal>
                     </Box>

                     <Box p={1} order={4}>
                        <IconButton
                           aria-label="show 4 new shops"
                           color="inherit"
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
                           onClick={handleMenu}
                           color="inherit">
                           <AccountCircle />
                        </IconButton>
                        <Menu
                           id="menu-appbar"
                           anchorEl={anchorElUser}
                           anchorOrigin={{
                              vertical: "top",
                              horizontal: "right",
                           }}
                           keepMounted
                           transformOrigin={{
                              vertical: "top",
                              horizontal: "right",
                           }}
                           open={openUser}
                           onClose={handleCloseUser}>
                           <MenuItem onClick={handleClose}>Profile</MenuItem>
                           <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                     </Box>
                  </Box>
               </div>
               
            </Toolbar>
            
         </AppBar>
      </div>
      
   );
};

export default NavBar;
