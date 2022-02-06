import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function LetterAvatars() {
  return (
    <Stack direction='row-reverse' spacing={2}>
        <Avatar sx={{ bgcolor: deepOrange[500], width: 100, height: 100}}> 
            <Box sx={{ width: '100%', height: '50%', textAlign: 'center'}}>
                <Typography variant="h3" gutterBottom component="div" >
                    G

                </Typography>
            </Box>
        </Avatar>
    </Stack>
  );
}