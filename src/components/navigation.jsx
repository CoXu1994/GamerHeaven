
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';


export default function ButtonAppBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{bgcolor: "black", borderBottom: "2px solid gray"}}>
          <Toolbar>
            <Typography variant="h6" component="span" sx={{ flexGrow: 1}}>
              GamerHeaven
            </Typography>
            <Link sx={{color: "white", textDecoration: "none",mr: 2}} to= "/">GENRE</Link>
            <Link sx={{color: "white", textDecoration: "none" }} to= "/">WISH LIST</Link>
          </Toolbar>
        </AppBar>
      </Box>
    );
};