import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Map from './../components/Map/Map.js'

export default function SimpleContainer() {
  return (
    
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} disableGutters={false}>
      <Map />
      </Container>
    </React.Fragment>
  );
}