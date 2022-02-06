import * as React from 'react';
import { green, pink, blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function IconAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: blue[500], width: 100, height: 100}}>
        <FolderIcon sx={{ fontSize: 50 }} /> 
      </Avatar>

      <Avatar sx={{ bgcolor: pink[500], width: 100, height: 100}}>
        <PageviewIcon />
      </Avatar>

      <Avatar sx={{ bgcolor: green[500], width: 100, height: 100}}>
        <AssignmentIcon />
      </Avatar>

      <Avatar sx={{ bgcolor: blue[500], width: 100, height: 100}}>
        <FolderIcon sx={{ fontSize: 50 }} /> 
      </Avatar>

      <Avatar sx={{ bgcolor: pink[500], width: 100, height: 100}}>
        <PageviewIcon />
      </Avatar>

      <Avatar sx={{ bgcolor: green[500], width: 100, height: 100}}>
        <AssignmentIcon />
      </Avatar>

    </Stack>
    //sx={{ bgcolor: deepOrange[500], width: 100, height: 100}
  );
}