import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CardItem from '../../Components/CardItem/CardItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 4 }}>
        <Grid item xs={3}>
          <CardItem/>
        </Grid>
        <Grid item xs={3}>
          <CardItem/>
        </Grid>
        <Grid item xs={3}>
          <CardItem/>
        </Grid>
        <Grid item xs={3}>
          <CardItem/>
        </Grid>
      </Grid>
    </Box>
  );
}
