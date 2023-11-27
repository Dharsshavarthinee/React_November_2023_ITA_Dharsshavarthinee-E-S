import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function Contact(){
    return(
      <body style={{backgroundColor:"#D3D3D3"}}>
      <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb:2 } }}>
        <Typography variant="h4">Contact Us</Typography>
        <p>
        Feel free to reach out to us for any questions, concerns, or assistance. We're here to help you with all your sports equipment needs!
        </p>
      </Box>
      <Box sx={{
         my: 5, ml: 10,
          "& h5": { fontWeight: "bold", mb: 2 } 
        }}>
        <Typography variant="h5">Business Hours</Typography>
        <p>Monday - Friday: 9:00 AM - 6:00 PM<br></br>
Saturday: 10:00 AM - 4:00 PM<br></br>
Sunday: Closed</p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper} style={{backgroundColor:"#E0E0E0"}}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <TableRow>
                <TableCell>
                  <LocationOnIcon sx={{ color: "blue", pt: 1 }} /> 
                  Address:
                </TableCell>
                <TableCell>
                Sports Emporium,123 Main Street,Coimbatore, Tamil Nadu, 641008.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />
                  General Inquiries:
                </TableCell>
                <TableCell> info@sportsemporium.com</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />
                  Customer Support:
                </TableCell>
                <TableCell> support@sportsemporium.com</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  Customer Service:
                </TableCell>
                <TableCell> 1800-00-0000
                  (tollfree)</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />
                  Phone Number 
                </TableCell>
                <TableCell>1234567890</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
    </body>
    )
};

export default Contact;