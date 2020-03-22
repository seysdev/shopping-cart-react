import React from "react";
import { useSelector } from "react-redux";

import "./Checkout.scss";

function Checkout(props) {
  const products = useSelector(state => state.PaymentReducer.products);

  return (
    <div className="Checkout">
      {products.length ? (
        <>
          <h2>Tienes {products.length} productos seleccionados</h2>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Descripcion</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, id) => (
                <tr key={id}>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <h1>Selecciona algun producto</h1>
        </>
      )}
    </div>
  );
}

export { Checkout };
