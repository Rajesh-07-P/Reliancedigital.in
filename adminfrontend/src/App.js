import { Routes, Route } from 'react-router-dom'
import './App.css';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Register from './components/Register';
import Verify from './components/Verify.jsx';
import WlcmLodr from './components/WlcmLodr';

function App() {
  return (
    <div className="App">
     
        <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/login' element={<Login />} />
       <Route path='/forgotpassword' element={<ForgotPassword/>} />
       <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
