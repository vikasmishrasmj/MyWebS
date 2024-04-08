import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
