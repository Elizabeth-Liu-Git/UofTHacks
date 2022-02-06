import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function Types() {
    return (
      <Box sx={{ width: '100%', height: '50%', textAlign: 'center'}}>
        <Typography variant="h3" gutterBottom component="div" >
          This is your Cart

        </Typography>
        </Box>
  );
}


/*import React from "react";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    let navigate = useNavigate();
  return (
  <div>
    <div>Cart</div>
    <button onClick={() => {
        navigate("/swap")
    }

    }>go to swap</button>
  </div>);
};

export default Cart;*/