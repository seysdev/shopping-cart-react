import React from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
// import { Elements, CardElement } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import "./Payment.scss";

const stripePromise = loadStripe("pk_test_cQnDXCvHofrYQ6cciCFZEOrr00JfzqlZ8v");

function Payment(props) {
  const products = useSelector(state => state.PaymentReducer.products);
  const onToken = token => {
    console.log('token', token)
    // fetch("https://localhost:3001", {
    //   method: "POST",
    //   body: JSON.stringify(token)
    // }).then(response => {
    //   response.json().then(data => {
    //     alert(`We are in business, ${data.email}`);
    //   });
    // });
  };

  console.log("products", products);

  const total = products.reduce(
    (valorAnterior, valorActual) =>
      valorAnterior + valorActual.price * valorActual.quantity,
    0
  );
  console.log("total", total);

  return (
    // <Elements stripe={stripePromise}>
    //   <form method="POST" onSubmit={handleSubmit}>
    //     <CardElement
    //       options={{
    //         style: {
    //           base: {
    //             fontSize: "16px",
    //             color: "#424770",
    //             "::placeholder": {
    //               color: "#aab7c4"
    //             }
    //           },
    //           invalid: {
    //             color: "#9e2146"
    //           }
    //         }
    //       }}
    //     />
    //   </form>
    // </Elements>
    <div>
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
            <tfoot>
              <tr>
                <td colSpan="3">Total</td>
                <td>S/&nbsp;&nbsp;{total}</td>
              </tr>
            </tfoot>
          </table>
          <div className="t-a-center m-t-20">
            <StripeCheckout
              stripeKey="pk_test_cQnDXCvHofrYQ6cciCFZEOrr00JfzqlZ8v"
              token={onToken}
              label="Pagar"
              amount={total}
            />
          </div>
        </>
      ) : (
        <>
          <h1>Selecciona algun producto</h1>
        </>
      )}
    </div>
  );
}

export { Payment };
