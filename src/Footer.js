import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#c0caa2',
        color: 'white'
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          Created by Ronel G. Vega
        </Typography>
        <Typography variant="body2" align="center">
          Built with <Link color="inherit" href="https://mui.com/">Material-UI</Link>.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;