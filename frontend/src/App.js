import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Driver from './components/Driver';
import User from './components/User';
import { Auth } from './components/Auth/Auth';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth role="signup" />} />
          <Route path='/login' element={<Auth role="signin" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/whereto' element={<Driver />} />
          <Route path='/towhere' element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
