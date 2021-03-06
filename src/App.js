import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CheckOut from './Pages/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
