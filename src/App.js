import React, {useState} from "react";
import "./App.css";

import { Line } from "react-chartjs-2";

/* Модель 1 вариант 3 */

/* todo: возможность задать совй шаг;
считать оптимальный шаг по кнопке;
задать константы        
*/

const App = () => {
  const [defaultH, setH] = useState(0.1);
  const [constants, setConstants] = useState({
    a: 0.5,
    m: 2000,
    u: 20,
    cx: 0.03,
    cy: 0.002,
    m1: 0.05,
    m2: 0.01,
    T: 12,
    g: 9.81
  })
  const {
    p = 100000,
    a = 0.5,
    m = 2000,
    u = 20,
    cx = 0.03,
    cy = 0.002,
    m1 = 0.05,
    m2 = 0.01,
    T = 12,
    g = 9.81} = constants;
    
    const generateSteps = (start, end, step) => {
      const arr = [];
      for (let i = start; i < end; i += step) {
        arr.push(i);
      }
      return arr;
    };
    
    const Euler = (step) => {
      console.log('step:', step)
      const X = {
        1: [1800],
        2: [0.8],
        3: [0],
        4: [0],
        5: [0.8]
      },
      time = [0];
      
      const steps = generateSteps(0, T + step, step).length;
      
      for (let i = 1; i < steps; i++) {
        const t = i * step;
        // console.log(t);
        
        const x1 = X[1][i - 1],
        x2 = X[2][i - 1],
        x3 = X[3][i - 1],
        x4 = X[4][i - 1],
        x5 = X[5][i - 1];
        
        X[1].push(0);
        X[2].push(0);
        X[3].push(0);
        X[4].push(0);
        X[5].push(0);
        
        X[1][i] =
        x1 + step * (-g * Math.sin(x2) + (p - a * cx * x1 ** 2) / (m - u * t));
        
        X[2][i] =
        x2 +
        step *
        ((-g + (p * Math.sin(x5 - x2) + a * cy * x1 ** 2) / (m - u * t)) /
        x1);
        
        X[3][i] =
        x3 +
        step *
        ((m1 * a * (x2 - x5) * (x1 ** 2) - m2 * a * (x1 ** 2) * x3) /
        (m - u * t));
        
        X[4][i] = x4 + step * (x1 * Math.sin(x2));
        
        X[5][i] = x5 + step * x3;
        
        time.push(t);
      }
      
      return [X, time, steps];
    };
    
    const optimal = () => {
      
      const delta = [100],
      h = [defaultH],
      steps = [generateSteps(0, T + h[h.length - 1], h[h.length - 1]).length];
      
      let Y1, Ox, count, Y2;
      console.log(steps);
      
      while (delta[delta.length - 1] > 0.001) {
        [Y1, Ox, count] = Euler(h[h.length - 1]);
        [Y2] = Euler(h[h.length - 1] / 2);
        delta.push(
          Math.abs(
            (Y1[4][Y1[4].length - 1] - Y2[4][Y2[4].length - 1]) /
            Y2[4][Y2[4].length - 1]
            )
            );
            h.push(h[h.length - 1] / 2);
            steps.push(count);
          }
          
          return {Ox,Y1,h, delta, steps}
        }
        
        const {Ox, Y1, h, delta, steps} = optimal();
        
        const data1 = {
          xLabel: "time",
          yLabel: "x1",
          data: Ox.map((key, index) => ({ x: key, y: Y1[1][index] }))
        };
        const data2 = {
          xLabel: "time",
          yLabel: "x2",
          data: Ox.map((key, index) => ({ x: key, y: Y1[2][index] }))
        };
        const data3 = {
          xLabel: "time",
          yLabel: "x3",
          data: Ox.map((key, index) => ({ x: key, y: Y1[3][index] }))
        };
        const data4 = {
          xLabel: "time",
          yLabel: "x4",
          data: Ox.map((key, index) => ({ x: key, y: Y1[4][index] }))
        };
        const data5 = {
          xLabel: "time",
          yLabel: "x5",
          data: Ox.map((key, index) => ({ x: key, y: Y1[5][index] }))
        };
        
        const dataDelta = {
          xLabel: "h",
          yLabel: "delta",
          data: h.map((key, index) => ({ x: key, y: delta[index] }))
        };
        const dataSteps = {
          xLabel: "h",
          yLabel: "steps",
          data: h.map((key, index) => ({ x: key, y: steps[index] }))
        };
        
        const data = [data1, data2, data3, data4, data5, dataDelta, dataSteps];
        
        
        return (
          <>
          {Object.entries(constants).map(([key, value], index) => {
            return (<div key={index}>{key} <input defaultValue={value} onKeyDown={e => {
              if (e.keyCode === 13) {
                setConstants({...constants, [key]: +e.target.value})
              }
            }} /></div>)
          })}
          <input type="button" onClick={optimal} value={'Оптим.'} />
          <input defaultValue={defaultH} onKeyDown={e => {
            console.log(e.keyCode);
            if (e.keyCode === 13)
            setH(+e.target.value)
          } } />
          <div className="gridContainer">
          {data.map((item, key) => (
            <div key={key}>
            <Line
            options={{
              scales: {
                xAxes: [
                  {
                    type: "linear",
                    scaleLabel: {
                      display: true,
                      labelString: item.xLabel
                    }
                  }
                ],
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: item.yLabel
                    }
                  }
                ]
              },
              legend: {
                display: false
              }
            }}
            data={{
              datasets: [
                {
                  data: item.data,
                  fill: false,
                  borderColor: 'blue'
                }
              ]
            }}
            />
            </div>
            ))}
            </div>
            </>
            );
          };
          
          export default App;
          