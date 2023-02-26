import { Routes, Route } from 'react-router-dom'
import './App.css';

import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Register from './components/Register';
// Dashboard imports
import CreateProduct from './components/dashboard/CreateProduct.jsx'
import Product from './components/dashboard/Product';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        {/* dashboard routes */}
        <Route path='/create-product' element={<CreateProduct />} />
        <Route path='/products' element={<Product />} />
        {/* if route is not exists */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
