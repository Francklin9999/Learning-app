import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Learn from './components/Learn';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <>
      <Router>
        
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/" element={<Home />} />

        </Routes>

      </Router>
    </>
  );
}

