import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/lab1">
          Программная реализация имитационной модели нелинейной динамической
          системы
        </Link>
      </li>
      <li>
        <Link to="/lab2">
          Имитационное моделирование детерменированного конечного автомата
        </Link>
      </li>
    </ul>
  );
};

export default Home;
