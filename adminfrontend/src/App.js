import { Routes, Route } from 'react-router-dom'
import './App.css';

import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Register from './components/Register';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     
        <Routes>
          
        <Route path='/register' element={<Register />} />       
        <Route path='/login' element={<Login />} />
       <Route path='/forgotpassword' element={<ForgotPassword/>} />
       <Route path='/dashboard' element={<Dashboard/>} />
       <Route path='*' element={<NotFound/>}/>
 
      </Routes>
    </div>
  );
}

export default App;
