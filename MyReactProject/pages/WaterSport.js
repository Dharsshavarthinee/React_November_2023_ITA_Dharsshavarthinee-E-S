import React from 'react';
import Layout from "./../components/Layout/Layout";

import { Container, 
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid } from '@mui/material';


function WaterSport() {
  const products = [

    {
      name: 'Kayaking Gear',
      description: 'High-quality gear for an exhilarating kayaking experience.',
      price: '₹9,999',
      imageUrl:'https://dsgmedia.blob.core.windows.net/pub/2018/04/kayak-fishing-gear1.jpg',
    },
    {
      name: 'Water Surfing Board',
      description: 'Surfboard for riding the waves and enjoying water surfing.',
      price: '₹6,799',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/I/41JDuvw8aEL.jpg',
    },
    {
      name: 'Inflatable Stand-Up Paddleboard',
      description: 'Portable and inflatable paddleboard for on-the-go water adventures.',
      price: '₹3,499',
      imageUrl:'https://dks.scene7.com/is/image/dkscdn/16LIFYHLGNYTHSPBRPSS_Glacier_Blue_is?wid=1400&fmt=jpg',
    },
    {
      name: 'Water Ski Set',
      description: 'Professional water ski set for thrill-seekers who love gliding on water.',
      price: '₹7,999',
      imageUrl:'https://lepiershorelineandoutdoors.com/wp-content/uploads/10TA1N6g.jpeg',
    },
    {
      name: 'Goggles',
      description: 'Swimming goggles for clear vision underwater.',
      price: '₹499',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/I/71Tq07f5AnL._AC_SL1500_.jpg',
    },
    {
      name: 'Cap',
      description: 'Swimming cap for added comfort and hydrodynamics.',
      price: '₹199',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/I/71kDx0LDJxL.jpg',
    },
    {
      name: 'Earplug',
      description: 'Waterproof earplugs for protecting your ears while swimming.',
      price: '₹99',
      imageUrl:'https://5.imimg.com/data5/SELLER/Default/2020/12/BX/ND/TM/10524319/3m-1110-corded-foam-disposable-earplugs.jpg',
    },
    {
    name: 'Fishing Rod',
    description: 'High-quality fishing rod for an excellent fishing experience.',
    price: '₹499',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/717Z6tOU4mL._AC_SL1500_.jpg',
  },
  {
    name: 'Fishing Reel',
    description: 'Durable fishing reel for smooth and efficient line retrieval.',
    price: '₹299',
    imageUrl:'https://i5.walmartimages.com/asr/834a8885-8197-4345-aa03-34ab0a926844_1.1c82f33e453c3173b54784ed0593ced0.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
  },
  {
    name: 'Paddle',
    description: 'Lightweight paddle for efficient and comfortable canoeing.',
    price: '₹199',
    imageUrl:'https://i5.walmartimages.com/asr/4b3a6656-9421-42f9-8d68-6c695bd96a48_1.5fe11a2ed8a4da64db920138d37eb072.jpeg',
  },
  {
    name: 'Snorkel Set',
    description: 'Complete snorkeling set for exploring underwater wonders.',
    price: '₹599',
    imageUrl:'https://www.ecotreasures.com.au/wp-content/uploads/2016/09/611601823-Dolphin-Set.jpg',
  },
  
  ];
  
  return (
    <body style={{backgroundColor:"#000000"}}>
    <Layout>

    <Container sx={{marginBottom:"50px"}}>
      <Typography variant="h4" align="center" mt={3} mb={3}>
        Water Sport Equipments
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

export default WaterSport;
