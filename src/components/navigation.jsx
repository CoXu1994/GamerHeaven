
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Drawer, ListItemButton} from '@mui/material';
import { useState } from 'react';
import "../sass/navigation.scss";
import { navbar, navItemsPlacement, navBurgerToggle, navDrawerMenuBG, navDrawerItemSeparator } from "./styles.js";

export default function NavBar() {
  const  [open, toggleDrawer] = useState(false);

  return (
    <Box>
      <AppBar position="fixed" className="nav__box" sx={navbar}>
        <Toolbar sx={navItemsPlacement}>
          <Link className='nav__link' to= "/">
            <span className="nav__title icon-gamepad">GamerHeaven</span>
          </Link>
          <IconButton 
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={navBurgerToggle}
            onClick={() => toggleDrawer(true)}
          >   
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="top"
            variant="temporary"
            open={open}       
            onClose={() => toggleDrawer(false)}
          >   
            <Box sx={navDrawerMenuBG}>
              <Link className="nav__link" to= "/wish-list">
                <ListItemButton sx={navDrawerItemSeparator}>
                  <p className = "nav__burger">Go to wish list</p> 
                </ListItemButton>
              </Link>    
              <Link className="nav__link" to= "categories">
                <ListItemButton>   
                  <p className = "nav__burger">Go to categories</p>      
                </ListItemButton>
              </Link>
            </Box>
          </Drawer>

          <div className="nav__menu">
            <Link className="nav__link" to= "/wish-list">
              <p className="nav__menu__option" >Wish list</p>
            </Link>
            <Link className="nav__link" to= "/categories">
              <p className="nav__menu__option" >Categories</p>
            </Link>  
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
