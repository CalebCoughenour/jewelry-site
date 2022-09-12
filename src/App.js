import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
