import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const ContForm = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #171717;

  .form {
    width: 96%;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;

    p {
      font-size: 2rem;
      text-align: center;
      font-weight: bold;
      font-weight: 3000;
      color: #000000;
    }

    input {
      width: 60%;
      height: 2.5rem;
      border-radius: 20px;
      border: 2px solid #898e93;
      color: #5e6367;
      margin-top: 20px;
      padding-left: 23px;
      font-weight: bold;
    }

    input:focus {
      outline: none;
      border-color: #1ad2c9;
    }

    .Envio {
      width: 30%;
      background-color: #31c9c1;
      outline: none;
      padding: 0;
      color: #ffffff;
      border: none;
      cursor: pointer;
    }

    .Envio:hover {
      color: #000000;
    }

    .error {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 450px) {
    .form {
      width: 60%;
    }
  }
  @media screen and (min-width: 780px) {
    .form {
      width: 50%;
    }
  }
  @media screen and (min-width: 1024px) {
    .form {
      width: 35%;
    }
  }
  @media screen and (min-width: 1280px) {
    .form {
      width: 450px;
    }
  }
`;

const Seccion = () => {
  const [USERLogin, setUSERLogin] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      password: e.target.password.value,
    };

    if (user.name === "admin" && user.password === "1234") {
      navigate(`/admin`);
      return;
    } else {
      setError("usted no es el admin mofoka");
      setUSERLogin(user);
    }
  };

  return (
    <ContForm>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <p>Iniciar Sesión</p>
        </div>
        <input type="text" placeholder="User Name" name="name" />
        <input type="password" name="password" id="" placeholder="Password" />
        <input className="Envio" type="submit" value="Ingresar" />
        {error && <p className="error">{error}</p>}
        {USERLogin && USERLogin.name !== "admin" && (
          <Navigate to={`/${USERLogin.name}`} />
        )}
      </form>
    </ContForm>
  );
};

export default Seccion;
