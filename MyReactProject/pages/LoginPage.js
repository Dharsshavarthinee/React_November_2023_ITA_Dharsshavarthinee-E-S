import Layout from "./../components/Layout/Layout";
import { Link, NavLink } from "react-router-dom";
import Banner from "../images/bannerr.avif";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "../styles/LoginStyles.css";

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
       
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };

      const response = await axios.post('http://localhost:3000/users', formData);

      const authToken = response.data.token;

      console.log('Login successful. Token:', authToken);
      
      navigate.push('/');
    } catch (error) {
      console.error('Login failed', error.response.data);
      setLoginError('Incorrect email or password');
    }
  };

  return (
    <Layout>
      <body className="loginbg" style={{ backgroundImage: `url(${Banner})` }}>
        <div>
          <div className="LoginDiv">
            <Container component="main" maxWidth="sm">
              <Box
                sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                  px: 4,
                  py: 4,
                  borderBlockColor: "Highlight",
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                className="LoginPage"
              >
                <Typography component="h1" variant="h5">
                  Log in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "black" }}
                  >
                    Log In
                  </Button>
                  {loginError && (
                    <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                      {loginError}
                    </Typography>
                  )}
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        {"Lost your password?"}
                      </Link>
                    </Grid>
                    <Grid item>
                      <NavLink to="/signup" variant="body2">
                        {"Don't have an account? Register Now"}
                      </NavLink>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </div>
        </div>
      </body>
    </Layout>
  );
}

export default LoginPage;
