import React, { useState } from 'react';

const ProductsManagement = () => {
  // Data for testing purposes
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category 1' , price: 10 , stockQuantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 20, stockQuantity: 200 },
    { id: 3, name: 'Product 3', category: 'Category 3', price: 30, stockQuantity: 300 },
  ]);

  const handleAddProduct = () => {
    // Add new product to the list
  };

  const handleEditProduct = (id) => {
    // Edit the selected product
  };

  const handleDeleteProduct = (id) => {
    // Remove the selected product from the list
  };

  return (
    <div>
      <h2>Products Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Category </th>
            <th>Price </th>
            <th>Stock Quantity </th>
            <th>Actions </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category} </td>
              <td>{product.price}</td>
              <td>{product.stockQuantity}</td>
              <td>
                <button onClick={() => handleEditProduct(product.id)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductsManagement;
