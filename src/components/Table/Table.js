import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import EnhancedTable from './EnhancedTable';

export default function Table() {
    return (
        <Container maxWidth="lg">
        <Typography component="div" variant="h4" style={{ backgroundColor: '#fff', height: '100vh', marginTop: '120px' }} > 
        Table Component goes here
        <EnhancedTable/>
         </Typography>
         
      </Container>
    )
}
