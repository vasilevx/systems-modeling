import React, { useState } from 'react';
import { generateRandomValues } from './lab3';
import { Line } from 'react-chartjs-2';
const reverseF = x => Math.atan(x);

const mean = arr => {
    const size = arr.length;
    return (
        arr.reduce((sum, item) => {
            sum += item;
            return sum;
        }, 0) / size
    );
};

export const lineOptions = {
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
                    display: true
                    // labelString: 't'
                }
            }
        ],
        yAxes: [
            {
                scaleLabel: {
                    display: true
                    // labelString: 'K(t)'
                }
            }
        ]
    },
    legend: {
        display: true
    }
};

function factorial(n) {
    if (n === 0) return 1;
    return n != 1 ? n * factorial(n - 1) : 1;
}

const D = 0.5;
const alpha = 2;
const h = 0.002;
const n = 10000;
const nsteps = 3 / alpha / h;

const S0 = h;
const Kf = Math.sqrt((2 * D) / alpha / S0);
const Tf = 1 / alpha;

/*********** */
export const getNormalSample = size => {
    const normalSample = [];
    const randomValues = [];
    while (normalSample.length < size) {
        const uniSample = generateRandomValues(2);
        randomValues.push(...uniSample);
        const [v1, v2] = uniSample.map(item => 2 * item - 1);
        const s = v1 ** 2 + v2 ** 2;

        if (s >= 1) {
            continue;
        }

        const r = Math.sqrt((-2 * Math.log(s)) / s);

        normalSample.push(r * v1);
        normalSample.push(r * v2);
    }

    return [normalSample.slice(0, size), randomValues.slice(0, size)];
};

export const towardUniform = sample => {
    let rightFactor = Array(sample.length).fill(0);

    for (let i of [...Array(30).keys()]) {
        rightFactor = rightFactor.map((item, index) => {
            return (
                item +
                (Math.pow(-1, i) * Math.pow(sample[index], i * 2)) /
                    Math.pow(2, i) /
                    factorial(i) /
                    (i * 2 + 1)
            );
        });
    }

    return sample.map(
        (item, index) =>
            0.5 + (item / Math.sqrt(2 * Math.PI)) * rightFactor[index]
    );
};

const Lab5 = () => {
    const [u, setU] = useState(true);
    const [whiteNoise, whiteNoiseX] = getNormalSample(n);

    /* Преобразование равномерно распределения белого шума в стандартизированный закон*/
    const whiteNoiseData = whiteNoise
        .map((item, index) => ({
            x: index,
            y: item
        }))
        .sort((a, b) => a.x - b.x);

    /* Требуемые корреляционные свойства с помощью формирующего фильтра */

    let mean1 = 0;
    const X1 = new Array(n).fill(0);

    for (let i of [...Array(n - 1).keys()]) {
        X1[i + 1] = X1[i] + h * ((Kf / Tf) * whiteNoise[i] - (1 / Tf) * X1[i]);
        mean1 += X1[i + 1];
    }

    mean1 /= n;

    /* Теоретическая и эмпирические функции корреляции */
    const corrTheoretical1 = new Array(nsteps)
        .fill(0)
        .map((_, i) => D * Math.exp(-alpha * i * h));

    const corrEmpirical1 = [];
    for (let j of [...Array(nsteps).keys()]) {
        let sum = 0;
        for (let i of [...Array(n - j).keys()]) {
            sum += (X1[i] - mean1) * (X1[i + j] - mean1);
        }
        sum /= n + 1 - j;
        corrEmpirical1.push(sum);
    }

    const theorData1 = corrTheoretical1.map((item, index) => ({
        x: index,
        y: item
    }));
    const empirData1 = corrEmpirical1.map((item, index) => ({
        x: index,
        y: item
    }));

    /*  Преобразование нормального закона в равномерный*/
    const X2 = towardUniform(X1);
    let mean2 = mean(X2);

    const corrEmpirical2 = [];

    for (let j of [...Array(nsteps).keys()]) {
        let sum = 0;
        for (let i of [...Array(n - j).keys()]) {
            sum += (X2[i] - mean2) * (X2[i + j] - mean2);
        }
        sum /= n + 1 - j;
        corrEmpirical2.push(sum);
    }

    const empirData2 = corrEmpirical2.map((item, index) => ({
        x: index,
        y: item
    }));

    /* Обеспечение требуемого закона распределения */
    const X3 = [];
    for (let i of X2) {
        X3.push(reverseF(i));
    }

    const mean3 = mean(X3);

    const corrEmpirical3 = [];

    for (let j of [...Array(nsteps).keys()]) {
        let sum = 0;
        for (let i of [...Array(n - j).keys()]) {
            sum += (X3[i] - mean3) * (X3[i + j] - mean3);
        }
        sum /= n + 1 - j;
        corrEmpirical3.push(sum);
    }

    const empirData3 = corrEmpirical3.map((item, index) => ({
        x: index,
        y: item
    }));
    /************ */
    return (
        <div>
            <button onClick={() => setU(!u)}>Сгенерировать</button>

            <p>
                Преобразование равномерного закона распределения белого шума в
                стандартизированный нормальный закон распределения
            </p>
            <div style={{ maxWidth: '700px' }}>
                <Line
                    options={lineOptions}
                    data={{
                        datasets: [
                            {
                                data: whiteNoiseData,
                                steppedLine: true,

                                fill: false,
                                borderColor: 'blue',
                                label: 'Белый шум',
                                pointRadius: 0,
                                pointHitRadius: 0
                            }
                        ]
                    }}
                />
                <Line
                    options={lineOptions}
                    data={{
                        datasets: [
                            {
                                data: theorData1,
                                steppedLine: true,

                                fill: false,
                                borderColor: 'blue',
                                label: 'Теоретическая K(t)',
                                pointRadius: 0,
                                pointHitRadius: 0
                            },
                            {
                                data: empirData1,
                                steppedLine: true,

                                fill: false,
                                borderColor: 'green',
                                label: 'Эмпирическая K*(t)',
                                pointRadius: 0,
                                pointHitRadius: 0
                            }
                        ]
                    }}
                />
                <p>
                    Преобразование нормального закона распределения
                    генерируемого процесса в равномерный
                </p>
                <Line
                    options={lineOptions}
                    data={{
                        datasets: [
                            {
                                data: empirData2,
                                steppedLine: true,

                                fill: false,
                                borderColor: 'green',
                                label: 'K*(t)',
                                pointRadius: 0,
                                pointHitRadius: 0
                            }
                        ]
                    }}
                />
                <p>Обеспечение иребуемого закона распределения</p>
                <Line
                    options={lineOptions}
                    data={{
                        datasets: [
                            {
                                data: empirData3,
                                steppedLine: true,

                                fill: false,
                                borderColor: 'green',
                                label: 'K*(t)',
                                pointRadius: 0,
                                pointHitRadius: 0
                            }
                        ]
                    }}
                />
            </div>
        </div>
    );
};

export default Lab5;
