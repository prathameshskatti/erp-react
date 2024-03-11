import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  //Data for testing purposes
  const totalProducts = 100;
  const totalOrders = 50;

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Welcome to the ERP Dashboard</h3>
      <div>
        <Link to="/products">
        <button>Products Management</button>
        </Link>
        <Link to="/orders">
        <button>Orders Management</button>
        </Link>
        <Link to="/ordersCalendarview">
        <button>OrdersCalendarview</button>
        </Link>
      </div>
      <div>
        <h3>Key Metrics:</h3>
        <p>Total Number of Products: {totalProducts}</p>
        <p>Total Number of Orders: {totalOrders}</p>
      </div>
    </div>
  );
};

export default Dashboard;
