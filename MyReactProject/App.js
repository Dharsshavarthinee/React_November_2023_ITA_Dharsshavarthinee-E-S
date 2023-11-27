import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Registration from"./pages/Registration";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Menu from "./pages/Menu";
import TeamSport from "./pages/TeamSport";
import OutdoorAdv from "./pages/OutdoorAdv";
import WaterSport from "./pages/WaterSport";
import { ThemeProvider,createTheme } from "@mui/material/styles";


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
    },
  });
  
  return (
      <ThemeProvider theme={theme}>
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/team" element={<TeamSport/>}/>
          <Route path="/outdoor" element={<OutdoorAdv/>}/>
          <Route path="/water" element={<WaterSport/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
