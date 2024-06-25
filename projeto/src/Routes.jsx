import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import './Routes.css'; 

const AppRoutes = () => {
  return (
    <Router>
      <div className="App"> 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;

