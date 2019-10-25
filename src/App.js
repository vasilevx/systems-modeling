import React from "react";
import "./App.css";

import { Line } from "react-chartjs-2";

/* Модель 1 вариант 3 */

function App() {
  const generateSteps = (start, end, step) => {
    const arr = [];
    for (let i = start; i < end; i += step) {
      arr.push(i);
    }
    return arr;
  };

  const Euler = step => {
    const c = 7000,
      u = 20,
      T = 10,
      Hte = 10000,
      g = 9.81,
      X = [[0], [0], [1200]],
      time = [0];

    const steps = generateSteps(0, T + step, step).length;

    const r = j => 0.1 * Math.exp(-X[0][j] / Hte);

    for (let i = 1; i < steps; i++) {
      X[0].push(0);
      X[1].push(0);
      X[2].push(0);

      X[0][i] = X[0][i - 1] + step * X[1][i - 1];

      X[1][i] =
        X[1][i - 1] +
        step *
          ((c * u) / X[2][i - 1] -
            g -
            (r(i - 1) * Math.pow(X[1][i - 1], 2)) / X[2][i - 1]);

      X[2][i] = X[2][i - 1] + step * -u;

      time.push(i * step);
    }

    return [X, time, steps];
  };

  const delta = [100],
    h = [0.1],
    steps = [generateSteps(0, 13 + h[h.length - 1], h[h.length - 1]).length];

  let Y1, Ox, count, Y2;
  while (delta[delta.length - 1] > 0.001) {
    [Y1, Ox, count] = Euler(h[h.length - 1]);
    [Y2] = Euler(h[h.length - 1] / 2);

    delta.push(
      Math.abs(
        (Y1[0][Y1[0].length - 1] - Y2[0][Y2[0].length - 1]) /
          Y2[0][Y2[0].length - 1]
      )
    );
    h.push(h[h.length - 1] / 2);
    steps.push(count);
  }

  const data1 = Ox.map((key, index) => ({ x: key, y: Y1[0][index] }));
  const data2 = Ox.map((key, index) => ({ x: key, y: Y1[1][index] }));
  const data3 = Ox.map((key, index) => ({ x: key, y: Y1[2][index] }));
  const data4 = h.map((key, index) => ({ x: key, y: delta[index] }));
  const data5 = h.map((key, index) => ({ x: key, y: steps[index] }));

  const data = [data1, data2, data3, data4, data5];
  return (
    <>
      {data.map((item, key) => (
        <Line
          key={key}
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
                label: `Уравнение ${key + 1}`,
                backgroundColor: "black",
                fill: false,

                data: item
              }
            ]
          }}
        />
      ))}
    </>
  );
}

export default App;
