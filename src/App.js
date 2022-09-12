import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import Products from './pages/Products/Products';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/order' exact element={<Order />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
