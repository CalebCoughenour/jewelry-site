import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import Products from './pages/Products/Products';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/order' exact element={<Order />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
