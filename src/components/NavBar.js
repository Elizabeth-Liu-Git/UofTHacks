import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

return (
  <Box sx={{ pb: 7 }} ref={ref}>
    <CssBaseline />
    
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={10}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
        component={Link} to='/'
      />
      <BottomNavigationAction
        label="Swap"
        value="swap"
        icon={<SwapHorizontalCircleIcon />}
        component={Link} to='/swap'
      />
      <BottomNavigationAction
        label="Cart"
        value="cart"
        icon={<ShoppingCartIcon />}
        component={Link} to='/cart'
      />
      <BottomNavigationAction 
      label="Profile" 
      value="profile" 
      icon={<AccountCircleIcon />} 
      component={Link} to='/profile'
      />
      </BottomNavigation>
    </Paper>
  </Box>
);
}


