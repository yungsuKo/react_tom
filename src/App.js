import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import './index.css';
import Seller from './pages/Seller';
import Chat from './pages/Chat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/seller" element={<Seller />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
