import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <>
      <Router>
        
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />

        </Routes>

      </Router>
    </>
  );
}

