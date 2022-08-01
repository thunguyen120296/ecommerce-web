import { Grid, List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CardItem from '../../products/CardItem';
export default function BestSelling() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={4} md={4} lg={4}>
        <Box>
          <img src="/img/homepage/best-selling.png" className="w-100" />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <List>
          <ListItem disablePadding>
            <CardItem />
            <CardItem />
            <CardItem />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
