import React from "react";
import Layout from "./../components/Layout/Layout";
import {  NavLink } from "react-router-dom";
import {
    Box,
    Typography,
    Container,Grid,
  } from "@mui/material";

function Menu(){

    const imageStyle = {
        maxWidth: '100%',
        borderRadius: '10px',
      };
      const gallerySectionStyle = {
        padding: '70px',
        
        textAlign: 'center',
        color: 'black',
      };
    
      const galleryBoxStyle = {
        maxWidth: '80%',
        marginBottom: '20px',
      };
      
    return(
      <body style={{backgroundColor:"#D3D3D3"}}>
        <Layout>
          <body  className="Menupage">

        <Box sx={gallerySectionStyle} >
          <Container>
             <h1>Our Product Menu</h1>
             <br/>
             <br/>
            
            <Grid container spacing={1}>
              
                {/* Box outdoor */}
                <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                <NavLink to="/outdoor">
                    <img src="https://www.swiss123.com/wp-content/uploads/2019/09/0069725789eb2456257b04abec54356c.jpeg" alt="Outdoor Adventure Gear" style={imageStyle} />
                </NavLink>
                    <Typography variant="body2" color="inherit">
                    <h1>Outdoor Adventure Gear</h1>
                    <br></br>
                    <p>Outdoor adventure invites individuals to embrace nature's challenges and beauty, fostering a sense of exploration, resilience, and joy.</p>
                    </Typography>
                </Box>
                </Grid>


                {/* Box  team */}
                <Grid item xs={12} md={4}>
                  <Box sx={galleryBoxStyle}>
                <NavLink to="/team">
                    <img src="https://coachingkidz.com/wp-content/uploads/2020/09/General-13-Large_800x-768x576.jpg" alt="Team Sports Essentials" style={imageStyle} />
                </NavLink>
                    <Typography variant="body2" color="inherit">
                    <h1>Team Sports Essentials</h1>
                    <br></br>
                    <p>
                    Team sports create a dynamic synergy among players, promoting collaboration, strategic thinking, and camaraderie while engaging in competitive activities.
                    </p>
                    </Typography>
                  </Box>
                </Grid>


                {/* Box water*/}
                <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                <NavLink to="/water" >
                    <img src="https://www.ekeralatourism.net/wp-content/uploads/2016/11/Kayaking-1-1024x686.jpg" alt="Water Sports" style={imageStyle} />
                </NavLink>
                    <Typography variant="body2" color="inherit">
                    <h1>Water Sports</h1>
                    <br></br>
                    <p>Water sports encompass a diverse range of recreational activities,providing individuals with thrilling experiences and opportunities to connect with aquatic environments.</p>
                    </Typography>
                </Box>
                </Grid>
            </Grid>
          </Container>
        </Box>
          </body>
        </Layout>
        </body>
    );
  };
export default Menu;