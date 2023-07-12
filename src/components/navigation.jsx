
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Drawer, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';



export default function NavBar() {
  const  [open, toggleDrawer] = useState(false);
  
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{bgcolor: "black", borderBottom: "2px solid gray"}}>
          <Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Link style={{color: "white", textDecoration: "none",mr: 2, cursor: "pointer"}} to= "/">
              <Typography variant="h6" component="span" sx={{ flexGrow: 1}}>
                GamerHeaven
              </Typography>
            </Link>
            <IconButton 
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ display: { xs: 'block', sm: 'none',}, }}
              onClick={() => toggleDrawer(true)}
              >   
              <MenuIcon />
            </IconButton>
            <Drawer
                      
              anchor="top" //from which side the drawer slides in

              variant="temporary" //if and how easily the drawer can be closed

              open={open} //if open is true, drawer is shown
                      
              onClose={() => toggleDrawer(false)} //function that is called when the drawer should close
                      
              onOpen={() => toggleDrawer(true)} //function that is called when the drawer should open
            >
                
              <Box>
                <ListItemButton>
                  <ListItemText primary="Wish-list" />    
                  <Link style={{color: "transparent", textDecoration: "none",mr: 2, cursor: "pointer"}} to= "/wish-list">Go to wish list</Link>       
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Kategorie" />    
                  <Link style={{color: "transparent", textDecoration: "none",mr: 2, cursor: "pointer"}} to= "/">Go to categories</Link>       
                </ListItemButton>
                <ListItemButton>
                </ListItemButton>
          
                </Box>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    );
};
