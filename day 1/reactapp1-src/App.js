import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Counter from './components/Counter';
import ThemeSwitch from './components/ThemeSwitch';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Card/>
      <hr></hr>
      <Counter/>
      <hr></hr>
      <ThemeSwitch/>
    </div>
  );
}

export default App;
