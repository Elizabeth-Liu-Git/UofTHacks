import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const SwapHeader = () => {
    return (
      <Box sx={{ width: '100%', height: '50%', textAlign: 'center'}}>
        <Typography variant="h3" gutterBottom component="div" >
          Swaps Offered

        </Typography>
        </Box>
  );
}
export default SwapHeader;

