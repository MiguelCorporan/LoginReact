import React from "react";
import { useParams, useRoutes } from "react-router-dom";
import styled from "styled-components";

const Todo = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`;

const DashBoard = () => {
  const { name } = useParams();
  return <Todo>¡ Bienvenido {name} !</Todo>;
};

export default DashBoard;
