import React from 'react';
import Layout from "./../components/Layout/Layout";

import { Container, 
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid } from '@mui/material';


function TeamSport() {
  const products = [

    {
      name: 'Basketball',
      description: 'Official-size basketball for indoor and outdoor play.',
      price: '₹1,999',
      imageUrl:'https://www.gannett-cdn.com/-mm-/59ed8fafe594c4d7be1f8055531272d0b6bec057/c=0-108-1557-1279/local/-/media/2015/10/28/MountainHome/MountainHome/635816507979907361-Basketball.jpg',
    },
    {
      name: 'Cricket Bat',
      description: 'High-quality cricket bat for powerful shots.',
      price: '₹4,999',
      imageUrl:'https://cdn.shopify.com/s/files/1/0364/1041/products/IMG_0859_1024x1024.jpg?v=1560346942',
    },
    {
      name: 'Cricket Ball',
      description: 'Durable cricket ball for a thrilling cricket match.',
      price: '₹499',
      imageUrl:'https://nwscdn.com/media/catalog/product/cache/all/image/1200x/9df78eab33525d08d6e5fb8d27136e95/h/i/high_performance_test_match_cricket_balls_new.jpg',
    },
    {
      name: 'Hockey Stick',
      description: 'Professional-grade hockey stick for precision and power.',
      price: '₹3,299',
      imageUrl:'https://i5.walmartimages.com/asr/6ffa0773-ec03-4bd8-b218-ecb3fa6dfd3b_1.6b69208940293b663eed0862413b0816.jpeg',
    },
    {
      name: 'Hockey Ball',
      description: 'Specialized hockey ball for smooth gameplay.',
      price: '₹199',
      imageUrl:'https://nwscdn.com/media/catalog/product/cache/all/image/1200x/9df78eab33525d08d6e5fb8d27136e95/s/i/single-hockey-ball_1.jpg',
    },
    {
      name: 'Hockey Gloves',
      description: 'Protective gloves for hockey players.',
      price: '₹899',
      imageUrl:'https://i5.walmartimages.com/asr/319bd419-288f-429d-b57d-5266794184bd_1.2eeb9782dcc51d411425406093ec592a.jpeg',
    },
    {
      name: 'Volleyball',
      description: 'Regulation-size volleyball for intense matches.',
      price: '₹1,499',
      imageUrl:'https://sc02.alicdn.com/kf/HTB1qvTiRmrqK1RjSZK9q6xyypXa3/221330576/HTB1qvTiRmrqK1RjSZK9q6xyypXa3.jpg',
    },
    {
      name: 'Football',
      description: 'Premium-quality football for a thrilling game.',
      price: '₹1,499',
      imageUrl:'https://cdn.wallpapersafari.com/3/7/SFe72B.jpg',
    },
    {
      name: 'Football Net',
      description: 'Sturdy football net for goal-scoring action.',
      price: '₹899',
      imageUrl:'https://i5.walmartimages.com/asr/320ce313-15c1-4eee-b266-9c46e787e468_1.554e449407848dd39605953b94d40df4.jpeg',
    },
    {
      name: 'Badminton Racket',
      description: 'Advanced badminton racket for precision shots.',
      price: '₹2,999',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/I/812gd1tfyqL.jpg',
    },
    {
      name: 'Shuttlecock',
      description: 'Feathered shuttlecock for fast-paced badminton.',
      price: '₹299',
      imageUrl:'https://www.chinasportshop.com/media/catalog/product/cache/1/thumbnail/1000x/17f82f742ffe127f42dca9de82fb58b1/b/a/badminton-shuttlecock-a60-2.jpg',
    },
    {
      name: 'Badminton Net',
      description: 'Standard badminton net for casual and competitive play.',
      price: '₹599',
      imageUrl:'https://i5.walmartimages.com/asr/1caafc6d-7d83-4e2d-ba20-76bb3a81547b_1.7a9b26c7e8cdc5f384ee12a1e2dbe80c.jpeg',
    },
    {
      name: 'Tennis Racket',
      description: 'Professional tennis racket for powerful serves and accurate shots.',
      price: '₹2,999',
      imageUrl:'https://contents.mediadecathlon.com/p1785089/k$a59ad28c46e5c8562c5094f2d927e278/sq/Adult+Tennis+Racket+TR500+Green.jpg',
    },
    {
      name: 'Tennis Balls (Set of 3)',
      description: 'Set of three high-quality tennis balls for your tennis matches.',
      price: '₹399',
      imageUrl:'https://javysports.b-cdn.net/1039-large_default/tennis-balls-set-of-3.jpg',
    },
  ];
  
  return (
    <body style={{backgroundColor:"#000000"}}>
    <Layout>

    <Container sx={{marginBottom:"50px"}}>
      <Typography variant="h4" align="center" mt={3} mb={3}>
      Team Sports Essentials
      </Typography>

      <Grid container spacing={3}>
      {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
            <CardMedia
              component="img"
              height="300"
              image={product.imageUrl}
              alt={product.name}
            />
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography color="textSecondary" mb={2}>{product.description}</Typography>
                <Typography variant="h5">{product.price}</Typography>
                <Button>Add to cart</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Layout>
    </body>
  );
}

export default TeamSport;
