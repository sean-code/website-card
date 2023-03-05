import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';

function App() {
  return (
    <div className="App">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
