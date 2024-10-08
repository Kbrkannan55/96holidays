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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packagedetails" element={<PackageDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
