import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Students from './component/Students';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
          <Route exact path='/students' element={< Students />}></Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
