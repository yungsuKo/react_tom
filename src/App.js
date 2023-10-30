import logo from './logo.svg';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  let [count, setCount] = useState(0);
  function counter() {
    count += 1;
    setCount(count);
  }
  function reseter() {
    setCount(0);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

      <h3>Your click Count : {count}</h3>
      <button onClick={counter}>add</button>
      <button onClick={reseter}>reset</button>
    </div>
  );
}

export default App;
