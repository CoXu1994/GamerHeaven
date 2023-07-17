
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Drawer, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';
import SearchBar from './SearchBar';



export default function NavBar() {
  const  [open, toggleDrawer] = useState(false);
  const [button, toggleButton] = useState(false);
  const [sort, toggleSort] = useState(false);

  const handleOptionDisplay = (button) => {
    if (button == true) {
      return toggleButton(false)
    } else {
      return toggleButton(true)
    }
  }
  const handleSortDisplay = (event) => {
    return event.classList.toggle("d-none")
  }

  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{bgcolor: "black", borderBottom: "2px solid gray", minWidth: 360, margin: 0}}>
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
            >
                
              <Box>
              <Link style={{textDecoration: "none",mr: 2, cursor: "pointer"}} to= "/wish-list">
                <ListItemButton>
                  <ListItemText primary="Wish-list"/>    
                 <p style={{color: "black",}}>Go to wish list   </p> 
                </ListItemButton></Link>    
                <ListItemButton>
                  <ListItemText sx={{color: "black"}} primary="Kategorie" />    
                  <Link style={{color: "black" ,textDecoration: "none",mr: 2, cursor: "pointer"}} to= "categories">Go to categories</Link>       
                </ListItemButton>
                <ListItemButton onClick={() => {}}>
                  <ListItemText primary="Sortowanie" /> 
                  <p style = {{color: "black"}}>Sort options     </p>
                </ListItemButton>
                <ListItemButton onClick={() => {}}>
                  <ListItemText primary="Filtrowanie" />  
                  <p style = {{color: "black"}}>Filter options     </p>        
                </ListItemButton>
                <ListItemButton>
                <ListItemText primary="Szukaj" />
                  <SearchBar />
                </ListItemButton>
          
                </Box>
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    );
};
