import Home from './components/Home';
import Lesson from './components/Lesson';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Learn from './components/Learn';
import Score from './components/Score';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import PasswordReset from './components/PasswordReset';
import ErrorPage from './components/ErrorPage';
import Terms from './components/Terms';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

export default function App() {

  return (
    <>
      <Router>

        <div className="App">

          <Sidebar />
        
        <Routes>

          <Route path='/PasswordReset' element={<PasswordReset />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/score" element={<Score />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<ErrorPage />} />

        </Routes>

        <Footer />


        </div>

      </Router>
    </>
  );
}

