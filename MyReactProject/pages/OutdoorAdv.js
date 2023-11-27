import React from 'react';
import Layout from "./../components/Layout/Layout";

import { Container, 
  Typography,
   Card,
    CardContent,CardMedia,
     Grid, 
     Button} from '@mui/material';


function OutdoorAdv() {
  const products = [

    
  {
    name: 'Hiking Boots',
     description: 'Durable and comfortable hiking boots for outdoor adventures.',
     price: '₹5,499',
     imageUrl:'https://image.sportsmansguide.com/adimgs/l/5/594060_ts.jpg',
  },
  {
    name: 'Trekking Poles',
    description: 'Adjustable trekking poles for stability on uneven terrains.',
    price: '₹899',
    imageUrl:'https://www.highstreamgear.com/wp-content/uploads/2021/03/hiking-poles-1-red.jpg',
  },
  {
    name: 'Climbing Harness',
    description: 'Safety harness for climbing and rappelling activities.',
    price: '₹3,499',
    imageUrl:'https://www.bfgcdn.com/1500_1500_90/303-0383-0111/petzl-aquila-climbing-harness.jpg',
  },
  {
    name: 'Backpack',
    description: 'Spacious backpack with multiple compartments for your gear.',
    price: '₹2,999',
    imageUrl:'http://kathmandu.imgix.net/catalog/product/4/0/40732_interloperpackv2_902.jpg',
  },
  {
    name: 'Roller Skates',
    description: 'Classic roller skates for a smooth and enjoyable ride.',
    price: '₹3,499',
    imageUrl: 'https://i5.walmartimages.com/asr/3159a1a2-1192-4deb-a2eb-ff08cf5403e4.3a4a477ed8558eafeaa074115008b276.jpeg',
  },
  {
    name: 'Skating Board',
    description: 'Versatile skating board for cruising and tricks.',
    price: '₹2,199',
    imageUrl:'https://i5.walmartimages.com/asr/c277d4af-287c-40bb-82e2-126f09f38fd0.9f3782f376a5fede9b36e9afa4b2801a.jpeg',
  },
  {
    name: 'Chalk Bag',
    description: 'Chalk bag for keeping your hands dry during climbing.',
    price: '₹299',
    imageUrl:'https://assets.trailspace.com/assets/7/8/d/6817677/1000.jpg',
  },
  {
    name: 'Tent',
    description: 'Spacious tent for comfortable camping in various weather conditions.',
    price: '₹7,999',
    imageUrl:'https://cdn.mydeal.com.au/2662/4-person-family-camping-tent-in-navy-grey_06.jpg?v=637314743848391389',
  },
  {
    name: 'Sleeping Bag',
    description: "Insulated sleeping bag for a cozy night's sleep in the outdoors.",
    price: '₹1,499',
    imageUrl:'https://www.tripsavvy.com/thmb/kLcNA6fyUFBu6jS3VdcXWViw5Tk=/1500x1500/filters:no_upscale():max_bytes(150000):strip_icc()/ColemanKids30DegreeSleepingBag-5af9b4ed8023b900363af003.jpg',
  },
  {
    name: 'Camping Stove',
    description: 'Portable camping stove for cooking delicious meals outdoors.',
    price: '₹1,199',
    imageUrl:'https://i5.walmartimages.com/asr/a4c43c37-66fd-4439-bdec-93793fe239bb_1.bd387a66f40804c6523a9294755a21fd.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  },
  {
    name: 'Camping Lantern',
    description: 'Bright and durable camping lantern for nighttime illumination.',
    price: '₹499',
    imageUrl:'https://i5.walmartimages.com/asr/9a1caadc-d39c-4023-aafc-c1c4a97377f4_1.e5f81b19e82471105c2338fc59b43231.jpeg',
  },

  ];
  
  return (
      <body style={{backgroundColor:"#000000"}}>
    <Layout>

    <Container sx={{marginBottom:"50px"}}>
      <Typography variant="h4" align="center" mt={3} mb={3} color="white">
      Outdoor Adventure Gear
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

export default OutdoorAdv;
