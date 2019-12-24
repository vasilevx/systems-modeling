import React, { useState } from 'react';
import '../App.css';
import { Line } from 'react-chartjs-2';
import Zoom from 'chartjs-plugin-zoom';

/* 
Вариант 3 
Критерий согласия Колмогорова
*/
const analyticExpectedValue = 0.438;
const analyticVariance = 0.053;
// const min = 0;
// const max = Math.PI / 4;
const constLambda = 1.22;
const constP = 0.1;

/* Плотность распределения */
const f = x => {
    return 1 / (1 - Math.sin(x) ** 2);
};

/* Функция распределения */
const F = x => Math.tan(x);

/* Обратная первообразной функция*/
const reverseF = x => Math.atan(x);

/* Статистическая функция распределения */
// const statFunction = sortedArr => {
//     const len = sortedArr.length;
//     const res = sortedArr.map((_, index) => (index + 1) / len);
//     return res;
// };

export const generateRandomValues = n => {
    return [...new Array(n)].map(() => {
        return Math.random();
    });
};

const Lab3 = () => {
    const [u, setUpd] = useState(true);
    const [arraySize, setArraySize] = useState(50);

    /* Генерируем arraySize случайных чисел */
    const randomNumbers = generateRandomValues(arraySize).sort((a, b) => a - b);

    /* Находим значения обратной функции */
    const reverseValues = randomNumbers.map(reverseF);

    const statValues = [];
    const Fvalues = [];
    let deltaP = 0;
    let min = 1;
    let max = 0;

    const m = arraySize > 500 ? 30 : Math.floor(arraySize / (15 / 20));

    const before = Date.now();
    reverseValues.forEach((x, index) => {
        const FValue = F(x);

        if (FValue < min) {
            min = FValue;
        }

        if (FValue > max) {
            max = FValue;
        }
        const statValue = (index + 1) / arraySize;

        const delta = Math.abs(FValue - statValue);

        if (delta > deltaP) {
            deltaP = delta;
        }

        statValues.push(statValue);
        Fvalues.push(FValue);
    });

    const deltaX = (max - min) / m;

    const parts = [];

    let i = 0;

    while (i < m) {
        const minValue = min + deltaX * i;
        const maxValue = minValue + deltaX;
        parts[i] = {
            minValue,
            maxValue,
            data: [],
            size: 0
        };
        i++;
    }

    reverseValues.forEach(val => {
        parts.forEach(item => {
            const { minValue, maxValue } = item;
            if (val >= minValue && val <= maxValue) {
                item.size += 1;
                item.data.push(val);
            }
        });
    });

    const mappedParts = parts.map(part => ({
        V: (part.minValue + part.maxValue) / 2,
        P: part.size / arraySize
    }));

    const mean = mappedParts.reduce((sum, item) => sum + item.P * item.V, 0);
    const variance = mappedParts.reduce(
        (sum, item) => sum + item.P * (item.V - mean) ** 2,
        0
    );

    const lambda = deltaP * Math.sqrt(arraySize);
    const isOk = lambda <= constLambda;

    /* Преобразуем в формат графика */
    const FChartData = reverseValues.map((item, i) => ({
        x: item,
        y: Fvalues[i]
    }));

    const statChartData = reverseValues.map((item, i) => ({
        x: item,
        y: statValues[i]
    }));

    const after = Date.now();
    console.log('Time', after - before);
    return (
        <div>
            <label>
                <div>Размер выборки</div>
                <input
                    type="number"
                    defaultValue={arraySize}
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                            setArraySize(+e.target.value);
                            setUpd(!u);
                        }
                    }}
                />
            </label>
            <div style={{ maxWidth: '700px' }}>
                <Line
                    options={{
                        animation: {
                            duration: 0
                        },
                        hover: {
                            animationDuration: 0
                        },
                        responsiveAnimationDuration: 0,
                        elements: {
                            line: {
                                tension: 0
                            }
                        },
                        scales: {
                            xAxes: [
                                {
                                    type: 'linear',
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'Xi'
                                    }
                                }
                            ],
                            yAxes: [
                                {
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'F(x)'
                                    }
                                }
                            ]
                        },
                        legend: {
                            display: true
                        }
                    }}
                    data={{
                        datasets: [
                            {
                                data: statChartData,
                                steppedLine: true,

                                fill: false,
                                borderColor: 'blue',
                                label: 'F*(x)',
                                pointRadius: 0,
                                pointHitRadius: 0
                            },
                            {
                                data: FChartData,
                                steppedLine: true,
                                fill: false,
                                borderColor: 'green',
                                label: 'F(x)',
                                pointRadius: 0,
                                pointHitRadius: 0
                            }
                        ]
                    }}
                />
            </div>

            <table>
                <tbody>
                    <tr>
                        <th>
                            Δ<sub>p</sub>
                        </th>
                        <td colSpan={2}>{deltaP.toFixed(3)}</td>
                    </tr>
                    <tr>
                        <th>
                            λ<sub>p</sub>
                        </th>
                        <td colSpan={2}>
                            <b style={{ color: isOk ? 'green' : 'red' }}>
                                {lambda.toFixed(4)}
                            </b>
                            <b>
                                {isOk ? '⩽' : '>'} {constLambda}
                            </b>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan={3}>Параметры распределения</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Теоретический</th>
                        <th>Эмпирический</th>
                    </tr>

                    <tr>
                        <th>Мат. ожидание</th>
                        <th>{analyticExpectedValue}</th>
                        <th>{mean.toFixed(3)}</th>
                    </tr>
                    <tr>
                        <th>Дисперсия</th>
                        <th>{analyticVariance}</th>
                        <th>{variance.toFixed(3)}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Lab3;
