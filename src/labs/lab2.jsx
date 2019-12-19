import React, { useState, useRef, useEffect } from "react";
import "../App.css";

/* 
Вариант 3 - автомат Мили
Входов - 2
Выходов - 2
Состояний - 4
*/

const TRANS = [
  [3, 0, 2, 2],
  [1, 2, 1, 3]
];

const OUT = [
  [0, 0, 1, 1],
  [0, 1, 1, 0]
];

const Lab2 = () => {
  const textarea = useRef(null);

  const [z, setZ] = useState(0);
  const [x, setX] = useState("-");
  const [y, setY] = useState("-");

  useEffect(() => {
    if (x !== "-") {
      textarea.current.value += `Вход X${x + 1} -> Состояние Z${z +
        1} -> Выход Y${y + 1}\n`;
    }
  });
  return (
    <div>
      <p>Таблица переходов</p>
      <table>
        <tbody>
          <tr>
            <td />
            {[...new Array(4)].map((item, i) => (
              <th key={i}>
                Z<sub>{i + 1}</sub>
              </th>
            ))}
          </tr>
          {TRANS.map((arr, i) => {
            return (
              <tr key={i}>
                <th>
                  X<sub>{i + 1}</sub>
                </th>
                {arr.map((item, indx) => (
                  <td key={indx}>
                    Z<sub>{item + 1}</sub>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <p>Таблица выходов</p>
      <table>
        <tbody>
          <tr>
            <td />
            {[...new Array(4)].map((item, i) => (
              <th key={i}>
                Z<sub>{i + 1}</sub>
              </th>
            ))}
          </tr>
          {OUT.map((arr, i) => {
            return (
              <tr key={i}>
                <th>
                  X<sub>{i + 1}</sub>
                </th>
                {arr.map((item, indx) => (
                  <td key={indx}>
                    Y<sub>{item + 1}</sub>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <p>
        Текущее состояние автомата - <b>X{z + 1}</b>
      </p>
      <div>
        {[...new Array(2)].map((item, i) => {
          return (
            <input
              key={i}
              type="button"
              onClick={() => {
                setZ(TRANS[i][z]);
                setX(i);
                setY(OUT[i][z]);
              }}
              value={`Подать на вход Z${i + 1}`}
            />
          );
        })}
      </div>
      <textarea
        ref={textarea}
        style={{ width: "320px", height: "300px" }}
        disabled
      ></textarea>
    </div>
  );
};

export default Lab2;
