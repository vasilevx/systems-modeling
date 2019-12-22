import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ol>
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
      <li>
        <Link to="/lab3">
          Проектирование генератора случайных чисел с заданным законом распределения
        </Link>
      </li>
    </ol>
  );
};

export default Home;
