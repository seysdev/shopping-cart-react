import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import "./SignUp.scss";

function SignUp(props) {
  const [dataUser, setDataUser] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
  });

  const history = useHistory();

  const { register, errors, handleSubmit } = useForm();

  function handleChangeData(event) {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(event) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(dataUser),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        alert("El usuario se creo correctamente");
        history.replace("sign-in");
      });
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="SignUp">
      <h1 className="t-a-center">Registrar</h1>
      <div className="row">
        <div className="col">
          <input
            className="frm-ctrl"
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChangeData}
            ref={register({
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.name && errors.name.type === "required" && (
            <div className="alert alert-error">Este valor es requerido</div>
          )}
          {errors.name && errors.name.type === "pattern" && (
            <div className="alert alert-error">Solo puedes registrar texto</div>
          )}
        </div>
        <div className="col">
          <input
            className="frm-ctrl"
            type="text"
            name="lastname"
            placeholder="Apellido"
            onChange={handleChangeData}
            ref={register({
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.lastname && errors.lastname.type === "required" && (
            <div className="alert alert-error">Este valor es requerido</div>
          )}
          {errors.lastname && errors.lastname.type === "pattern" && (
            <div className="alert alert-error">Solo puedes registrar texto</div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            className="frm-ctrl"
            type="email"
            name="email"
            placeholder="Correo"
            onChange={handleChangeData}
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <div className="alert alert-error">Este valor es requerido</div>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <div className="alert alert-error">Ingresa un email valido</div>
          )}
        </div>
        <div className="col">
          <input
            className="frm-ctrl"
            type="text"
            name="phone"
            placeholder="Telefono"
            onChange={handleChangeData}
            ref={register({
              required: true,
              pattern: /^[0-9]+$/i,
            })}
          />
          {errors.phone && errors.phone.type === "required" && (
            <div className="alert alert-error">Este valor es requerido</div>
          )}
          {errors.phone && errors.phone.type === "pattern" && (
            <div className="alert alert-error">Ingresa solo numeros</div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            className="frm-ctrl"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChangeData}
            ref={register({ required: true })}
          />
          {errors.password && (
            <div className="alert alert-error">Este campo es obligatorio</div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary btn-full-width">Registrar</button>
        </div>
      </div>
    </form>
  );
}

export { SignUp };
