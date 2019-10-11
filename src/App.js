import React from "react";
import "./App.css";

import { Line } from "react-chartjs-2";

const variantVariables = {
  p: 10 ** 5,
  a: 0.5,
  m: 2000,
  u: 20,
  cx: 0.03,
  cy: 0.002,
  m1: 0.05,
  m2: 0.01,
  T: 12,
  x1_0: 1800,
  x2_0: 0.8,
  x3_0: 0,
  x4_0: 0,
  x5_0: 0.8,
  g: 9.81,
  h: 0.1
};

const x1 = [1800],
  x2 = [0.8],
  x3 = [0],
  x4 = [0],
  x5 = [0.8];

function App() {
  const {
    p,
    a,
    m,
    u,
    cx,
    cy,
    m1,
    m2,
    T,
    x1_0,
    x2_0,
    x3_0,
    x4_0,
    x5_0,
    g,
    h
  } = variantVariables;

  const x1_F = t => -g * Math.sin(x2) + (p - a * cx * x1 ** 2) / (m - u * t);
  const x2_F = t =>
    (-g + (p * Math.sin(x5 - x2) + a * cy * x1 ** 2) / (m - u * t)) / x1;

  const x3_F = t =>
    (m1 * a * (x2 - x5) * x1 ** 2 - m2 * a * x1 ** 2 * x3) / (m - u * t);

  const x4_F = t => x1 * Math.sin(x2);

  const x5_F = t => x3;
  return (
    <Line
      options={{
        scales: {
          xAxes: [
            {
              type: "linear",
              position: "bottom"
            }
          ]
        }
      }}
      data={{
        datasets: [
          {
            label: "test",
            fill: false,

            data: [...new Array(100)].map((item, index) => {
              return { y: x1_F(index), x: index };
            })
          }
        ]
      }}
    />
  );
}

export default App;
