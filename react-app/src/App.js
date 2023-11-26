import './App.css';
import Registration from './users/Registration';
import Login from './users/Login';
import Review from './users/Review';
import Navbar from './navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/review' element={<Review />}></Route>
      </Routes>
    </div>
  );
}

export default App;
