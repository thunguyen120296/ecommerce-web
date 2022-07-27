import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

export default function FooterDefault() {
  return (
    <Grid container spacing={2} sx={{ backgroundColor: 'background.paper' }}>
      <Grid item xs={3}>
        1
      </Grid>
      <Grid item xs={3}>
        2
      </Grid>
      <Grid item xs={3}>
        3
      </Grid>
      <Grid item xs={3}>
        4
      </Grid>
    </Grid>
  );
}
