// Header.js

import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Header() {
  return ( 
    <AppBar position="static" sx={{ backgroundColor: '#FFC000' }}>
      <Toolbar>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1, color: '#DDAC17', fontFamily: 'Cambria,serif' }}>
          <b>BRANDLET</b>
        </Typography>
        <Button  color="inherit" sx={{ color: '#FFFFFF' }}>
          HOME
        </Button>
        <Button color="inherit" sx={{ color: '#FFFFFF' }}>
          EXPLORE
        </Button>
        <Button color="inherit" sx={{ color: '#FFFFFF' }}>
          OUR CLIENTS 
        </Button>
        <Button color="inherit" sx={{ color: '#FFFFFF' }}>
          CONTACT US
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
