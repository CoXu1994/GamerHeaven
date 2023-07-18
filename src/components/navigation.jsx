
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Drawer, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';
import "../sass/navigation.scss";



export default function NavBar() {
  const  [open, toggleDrawer] = useState(false);

  
    return (
      <Box>
        <AppBar position="fixed" className="nav__box" sx={{bgcolor: "black"}}>
          <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Link style={{color: "white", textDecoration: "none",mr: 2, cursor: "pointer"}} to= "/">
              <span className="nav__title">GamerHaven</span>
            </Link>
            <IconButton 
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ display: { xs: 'block', md: 'none'}, }}
              onClick={() => toggleDrawer(true)}
              >   
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top" //from which side the drawer slides in

              variant="temporary" //if and how easily the drawer can be closed

              open={open} //if open is true, drawer is shown
                      
              onClose={() => toggleDrawer(false)} //function that is called when the drawer should close
            >
                
              <Box sx={{bgcolor: "rgb(100,100,100)"}}>
                <Link className="nav__link" to= "/wish-list">
                  <ListItemButton>
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
            <div className="nav__menu d-none">
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
