import React from "react";
import ProfileHeader from './../components/Header/ProfileHeader.js'
import Avatar from './../components/Avatar.js'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Profile = () => {
  return (
<React.Fragment>
      <Container maxWidth="sm">
      
        <ProfileHeader />
        <Avatar />
      
      </Container>
    </React.Fragment>

  );
};

export default Profile;