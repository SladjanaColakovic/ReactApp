import './App.css';
import Registration from './users/Registration';
import Login from './users/Login';
import Review from './users/Review';
import Profile from './users/Profile';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import RequireAuth from './protected-routes/RequireAuth';
import { Roles } from './protected-routes/Roles';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route element={<RequireAuth roles={Roles.ADMIN} />}>
          <Route path='/review' element={<Review />}></Route>
        </Route>
        <Route element={<RequireAuth roles={Roles.USER} />}>
          <Route path='/profile' element={<Profile />}></Route>
        </Route>
      </Route>
    </Routes>

  );
}

export default App;
