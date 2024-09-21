import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Foodstack from './Pages/Foodstack';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Foodstack/>} path="/foodstack"/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
