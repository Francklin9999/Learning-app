import './App.css';
import Home from './components/Home';
import Lesson from './components/Lesson';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Learn from './components/Learn';
import Footer from './components/Footer';
import PasswordReset from './components/PasswordReset';
import ErrorPage from './components/ErrorPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <>
      <Router>
        
        <Routes>

          <Route path='/PasswordReset' element={<PasswordReset />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<ErrorPage />} />

        </Routes>

        <Footer />

      </Router>
    </>
  );
}

