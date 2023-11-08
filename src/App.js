import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Seller from './pages/Seller';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Helmet></Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/seller" element={<Seller />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
