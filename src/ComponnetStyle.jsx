import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { useDispatch, useSelector } from 'react-redux';
import { userOut } from './featchers/user/userSlice';

import CustomizedBadges from './ShoppingBagIcon';
import { NavLink, useNavigate } from 'react-router-dom';
import { emptyBag } from './featchers/order/orderSlice';
const pages = ['Products', 'shoppingBag', 'addProduct','my orders'];
const settings = ['login', 'signUp', 'signOut'];
function ResponsiveAppBar() {    
  let dispatch=useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  let thisUser=useSelector((state)=>state.user.currentUser);
  const handleCloseUserMenu = (event) => {
    let id=+event.target.id;
     if(id==2&&thisUser!=null){ 
      localStorage.setItem("currentBasket","[]")  
      dispatch(emptyBag())  
        
      dispatch(userOut()) 
      alert("התנתקת")
      localStorage.setItem("currentUser",null)    
      

     }
     
    setAnchorElUser(null);
  };
    return (
      <AppBar style={{"direction":"rtl" ,backgroundColor:'rgb(255, 230, 225)'
    }} >
        <Container maxWidth="100vw">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
<div style={{width:"8vw"}}>
            <img src="https://www.beautyp.co.il/images/beautyp-logo2.png" style={{width:"100%"}}/>
            </div>            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page,index) => (<NavLink to={page}>
                  {(((thisUser==null||thisUser.role=="USER")&&index!=2&&index!=3)||
                  (thisUser!=null&&thisUser.role=='ADMIN'&&index!=1&&index!=3)||(thisUser!=null&&thisUser.role=='USER'&&index==3))&&<MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"  style={{color:"rgb(214,99,99,255)"}}>{page} </Typography>
                  </MenuItem>}</NavLink>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <div style={{width:"25vw"}}>
            <img src="https://www.beautyp.co.il/images/beautyp-logo2.png" style={{width:"100%"}}/>
            </div>

            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page,index) => (<NavLink to={page}>
                {(((thisUser==null||thisUser.role=="USER")&&index!=2&&index!=3)||
                  (thisUser!=null&&thisUser.role=='ADMIN'&&index!=1&&index!=3)||(thisUser!=null&&thisUser.role=='USER'&&index==3))&&
                <Button  style={{color:"rgb(214,99,99,255)"}}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>} </NavLink>
                
              ))}
                            <CustomizedBadges/>
                  
  
            </Box>
            <span  style={{color:"rgb(214,99,99,255)"}}>שלום  {thisUser!=null?thisUser.name:"אורח"} </span>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >

                {settings.map((setting,index) => (<NavLink to={setting=="signOut"?"/products":setting} 
                
                 >
                {((thisUser!=null&&index==2)||(thisUser==null&&index!=2))&&  <MenuItem key={setting} onClick={handleCloseUserMenu} >
                   <Typography id={index}  textAlign="center" style={{color:"rgb(214,99,99,255)"}}> {setting}</Typography>
                  </MenuItem>}</NavLink>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
  export default ResponsiveAppBar;