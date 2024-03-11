// App.js
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import OrdersCalendarView from './components/OrdersCalendarView';

const App = () => {
  return (
    <BrowserRouter>
        <div>
          <nav>
            <ul>
              {/* <li><a href='/dashboard'>Dashboard</a></li>
              <li><a href='/dashboard'>Dashboard</a></li>
              <li><a href='/dashboard'>Dashboard</a></li> */}
            </ul>
          </nav>
        </div>

      <Routes>
        <Route exact path="/" element={<Dashboard/>} />
          <Route path="/products" element={<ProductsManagement/>} />
          <Route path="/orders" element={<OrdersManagement/>} />
          <Route path="/OrdersCalendarView" element={<OrdersCalendarView/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

