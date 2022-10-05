import * as React from 'react';
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './home.scss'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Home() {

  const [expanded, setExpanded] = React.useState(false);
  const [products, setProducts] = useState([])
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getData = () => {
    fetch("https://fakestoreapi.com/products").then(x => x.json()).then(x =>setProducts(x))
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <Box class="box">
      <Container>
        <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            products.map(product => (
              <Grid item xs={6} key={product.id}>
                <Card sx={{ maxWidth: 345 }} class="card" >
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <div className="hidden-img">
                  <CardMedia
                    component="img"                 
                    height="450"
                    image={product.image}
                    alt="Paella dish"
                    class="img-con"
                  />
                  </div>
                 
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {product.title}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                      {product.description}
                      </Typography>
                     
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Container>

    </Box>
  );
}