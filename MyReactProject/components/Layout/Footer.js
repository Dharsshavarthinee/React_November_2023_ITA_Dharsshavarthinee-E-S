import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
        sx={{bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box>
        <Typography>
        <strong>Sports Emporium</strong>
        <br />
        123 Main Street,
        <br/> Coimbatore, Tamil Nadu,
        <br/> 641008.
        </Typography>
        </Box>
        <Box
          sx={{
            my: 2,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 1,
            },
            "& svg:hover": {
              color: "goldenrod",
              transition: "all 400ms",
            },
            textAlign:"right",
          }}
        >
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        
      </Box>
  );
};

export default Footer;
