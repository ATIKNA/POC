import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function Notification() {
    return (
        <Container maxWidth="lg">
        <Typography component="div" variant="h4" style={{ backgroundColor: '#fff', height: '100vh', marginTop: '120px' }} > 
        Notification Component goes here
         </Typography>
      </Container>
    )
}

