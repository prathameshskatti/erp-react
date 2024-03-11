import Calendar from 'react-calendar';
import React, { useState } from 'react';


const OrdersCalendarView = () => {
  //data for Testing  purposes
  const [orders, setOrders] = useState([
    { id: 1, orderId: 'ORD001', expectedDeliveryDate: new Date(2024, 2, 10), customerName: 'John Doe', status: 'Pending' },
    { id: 2, orderId: 'ORD002', expectedDeliveryDate: new Date(2024, 2, 15), customerName: 'Jane Smith', status: 'Shipped' },
    { id: 3, orderId: 'ORD003', expectedDeliveryDate: new Date(2024, 2, 20), customerName: 'Alice Johnson', status: 'Delivered' },
  ]);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const ordersForSelectedDate = orders.filter(order => {
    return selectedDate && order.expectedDeliveryDate.toDateString() === selectedDate.toDateString();
  });

  return (
    <div>
      <h2>Orders Calendar View</h2>
      <Calendar
        onClickDay={handleDateClick}
        tileContent={({ date }) => {
          const ordersForDate = orders.filter(order => order.expectedDeliveryDate.toDateString() === date.toDateString());
          return ordersForDate.length > 0 ? <div>{ordersForDate.length}</div> : null;
        }}
      />
      {selectedDate && (
        <div>
          <h3>Orders for {selectedDate.toDateString()}:</h3>
          <ul>
            {ordersForSelectedDate.map(order => (
              <li key={order.id}>{order.orderId} - {order.customerName}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrdersCalendarView;
