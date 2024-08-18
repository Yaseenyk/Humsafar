
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Login from './components/AuthPages/Login';
import Signup from './components/AuthPages/Signup';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
