import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import PackageDetails from './Components/PackageDetails/PackageDetails';


function App() {
  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path='/' element={<PackageDetails/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
