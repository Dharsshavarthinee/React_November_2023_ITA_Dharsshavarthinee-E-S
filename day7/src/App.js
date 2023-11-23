import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import { BrowserRouter, Routes,Route,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/AboutUs">About Us</Link>
        </li>
      </ul>  
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
