import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Home from './Components/HomePage/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import Login from './Components/Shared/Login/Login';
import Signup from './Components/Shared/Signup/Signup';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route> 
        <Route path="/login" element={<Login/>}></Route> 
        <Route path="/signup" element={<Signup/>}></Route> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
