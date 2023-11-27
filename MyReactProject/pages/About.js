import React from "react";
import { Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Layout from "./../components/Layout/Layout";
import { Box} from "@mui/material";

const About = () => {
    const setsUsApartData = [
        'Wide Range of High-Quality Products',
        'Expert Advice from Knowledgeable Staff',
        'Quality Assurance for All Products',
        'Exceptional Customer Service',
        'Innovative Sports Technology Solutions',
      ];


  return (
    <body style={{backgroundColor:"#D3D3D3"}}>
    <Layout>
      <Box
        sx={{
          my: 1,
          textAlign: "center",
          p: 2,
          marginLeft:"30px",
          marginRight:"30px",
          "& h4": {
            fontWeight: "bold",
            my: 5,
            fontSize: "3rem",
          },
          "& h5": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
            textAlign:"left",
          },
          "& h6": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
            textAlign:"left",
          },
          "& p": {
            textAlign: "justify",
            fontSize:"1rem"
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">About Sports Emporium</Typography>
        <p>
        Welcome to Sports Emporium, your one-stop destination for all things sports and fitness!
         At Sports Emporium, we are passionate about providing top-quality sports equipment and gear to enthusiasts of all levels.

        </p>
        <Box display="flex"
        justifyContent="center"
        alignItems="center"
        maxHeight={700}
        overflow="hidden"
        sx={{my:5}}
        >
           < img  src="http://sportsemporium.in/extra-images/banner-1.jpg"
           alt="Sports Emporium Image"
            style={{width:'50%'}}
          />
        </Box>
        <Typography variant="h5">Our Mission</Typography>
        <p>
        Our mission is to inspire and empower individuals to pursue an active and healthy lifestyle through sports. Whether you're a seasoned athlete or just starting on your fitness journey, we've got the right gear to support your passion.
        </p>
        <Typography variant="h5">What Sets Us Apart</Typography>
        <List>
        {setsUsApartData.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
        <Typography variant="h5">Our Store</Typography>
        <Typography>
        <strong>Sports Emporium</strong>
        <br />
        123 Main Street, Coimbatore, Tamil Nadu, 641008.
        <p>
        Explore our spacious showroom, try out equipment, and get personalized recommendations from our expert staff.
        </p>
      </Typography>
      </Box>
    </Layout>
    </body>
  );
};

export default About;
