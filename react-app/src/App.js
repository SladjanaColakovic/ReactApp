import './App.css';
import Registration from './users/Registration';
import Login from './users/Login';
import Navbar from './navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Registration/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
