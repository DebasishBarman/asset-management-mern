import './App.css';
import Login from './components/Login';
import Dashboard2 from './components/Dashboard';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard2/>}/>
      </Routes>
    </Router>
  );
}

export default App;
