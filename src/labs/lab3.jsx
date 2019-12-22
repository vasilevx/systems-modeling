import React, { useState } from 'react';
import '../App.css';
import { Line } from 'react-chartjs-2';
import Zoom from 'chartjs-plugin-zoom';

/* 
Вариант 3 
Критерий согласия Колмогорова
*/
const analyticExpectedValue = 0.438;
const analyticVariance = 0.0527;
const min = 0;
const max = Math.PI / 4;
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
const statFunction = sortedArr => {
    const len = sortedArr.length;
    const res = sortedArr.map((_, index) => (index + 1) / len);
    return res;
};

const generateRandomValues = n => {
    return [...new Array(n)].map(() => {
        return Math.random();
    });
};

const calculateMean = arr => {
    const len = arr.length;
    const mean = arr.reduce((sum, item) => sum + item, 0) / len;
    return mean;
};

const calculateVariance = (arr, mean) => {
    const len = arr.length;

    const varx = arr.reduce((sum, item) => (sum += (item - mean) ** 2), 0);
    return varx / (len - 1);
};

const Lab3 = () => {
    const [u, setUpd] = useState(true);
    const [arraySize, setArraySize] = useState(100);

    /* Генерируем arraySize случайных чисел */
    const randomNumbers = generateRandomValues(arraySize).sort((a, b) => a - b);

    /* Находим значения обратной функции */
    const reverseValues = randomNumbers.map(reverseF);

    /* Находим значения F(x) */
    const before = Date.now();

    const Fvalues = reverseValues.map(item => F(item));
    // const {Fvalues, statValues, deltaP, meanSum} = reverseValues.reduce((obj, x, index) => {
    //     const FValue = F(x);
    //     const statValue = (index + 1) / arraySize;

    //     const delta = Math.abs(FValue - statValue);

    //     if (delta > obj.deltaP) {
    //         obj.deltaP = delta;
    //     }

    //     obj.meanSum += FValue;

    //     obj.statValues = [...obj.statValues, statValue]
    //     obj.Fvalues = [...obj.Fvalues, FValue];
    //     return obj;
    // }, {statValues: [], Fvalues: [], deltaP: 0, meanSum: 0});

 
    /* Находим значени F*(x) */
    const statValues = statFunction(reverseValues);

    const deltaP = Fvalues.reduce((max, item, i) => {
        const statValue = statValues[i];
        const deltaFFirst = Math.abs(item - statValue);
        const deltaStatFirst = Math.abs(statValue - item);
        // console.log(deltaFFirst, deltaStatFirst);
        const deltaMin =
            deltaFFirst > deltaStatFirst ? deltaFFirst : deltaStatFirst;
        max = max > deltaMin ? max : deltaMin;
        return max;
    }, 0);

    const lambda = deltaP * Math.sqrt(arraySize);
    const isOk = lambda <= constLambda;
    const mean =calculateMean(Fvalues);
    const variance = 1;

    /* Преобразуем в формат графика */
    const [FChartData, statChartData] = reverseValues.reduce(
        (obj, item, i) => {
            obj[0] = [...obj[0], { x: item, y: Fvalues[i] }];
            obj[1] = [...obj[1], { x: item, y: statValues[i] }];
            return obj;
        },
        [[], []]
    );
   const after = Date.now();
    console.log(after - before);
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
            <Line
                width={300}
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
                            fill: false,
                            borderColor: 'blue',
                            label: 'F*(x)',
                            pointRadius: 0,
                            pointHitRadius: 0
                        },
                        {
                            data: FChartData,
                            fill: false,
                            borderColor: 'green',
                            label: 'F(x)',
                            pointRadius: 0,
                            pointHitRadius: 0
                        }
                    ]
                }}
            />
            <p>
                <b style={{ color: isOk ? 'green' : 'red' }}>
                    {lambda.toFixed(4)}
                </b>{' '}
                <b>
                    {isOk ? '⩽' : '>'} {constLambda}
                </b>
                ,{' '}
                <span>
                    выборка {!isOk && 'не'} удовлетворяет критерию Колмогорова
                </span>
            </p>
            <table>
                <tbody>
                    <tr>
                        <th colSpan={3}>Параметры распределения</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>Теоретический</th>
                        <th>Эмперический</th>
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
