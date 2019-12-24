import React, { useState } from 'react';
import { generateRandomValues } from './lab3';
import { Line } from 'react-chartjs-2';

function factorial(n) {
    return n != 1 ? n * factorial(n - 1) : 1;
}

const D = 1;
const alpha = 1;
const h = 0.002;
const n = 10000;
const nsteps = 3 / alpha / h;

const S0 = h;
const Kf = Math.sqrt((2 * D) / alpha / S0);
const Tf = 1 / alpha;

/*********** */
const getNormalSample = size => {
    const normalSample = [];

    while (normalSample.length < size) {
        const uniSample = generateRandomValues(2);
        const [v1, v2] = uniSample.map(item => 2 * item - 1);
        const s = v1 ** 2 + v2 ** 2;

        if (s >= 1) {
            continue;
        }

        const r = Math.sqrt((-2 * Math.log(s)) / s);

        normalSample.push(r * v1);
        normalSample.push(r * v2);
    }

    return normalSample.slice(0, size);
};

const towardUniform = sample => {
    let rightFactor = 0;

    for (let i of [...Array(30).keys()]) {
        rightFactor +=
            (Math.pow(-1, i) * Math.pow(sample, i * 2)) /
            Math.pow(2, i) /
            factorial(i) /
            (i * 2 + 1);
    }

    return 0.5 + (sample / Math.sqrt(2 * Math.PI)) * rightFactor;
};

const Lab5 = () => {
    const [u, setU] = useState(true);
    const whiteNoise = getNormalSample(n);

    let mean1 = 0;
    const X1 = new Array(n).fill(0);
    for (let i of [...Array(n - 1).keys()]) {
        X1[i + 1] = X1[i] + h * ((Kf / Tf) * whiteNoise[i] - (1 / Tf) * X1[i]);
        mean1 += X1[i + 1];
    }
    console.log(X1);
    mean1 /= n;
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

    /************ */
    return (
        <div>
            <button onClick={() => setU(!u)}>Сгенерировать</button>

            <p>После формирующего фильтра</p>
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
                                        labelString: 't'
                                    }
                                }
                            ],
                            yAxes: [
                                {
                                    scaleLabel: {
                                        display: true,
                                        labelString: 'K(t)'
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
                                data: theorData1,
                                fill: false,
                                borderColor: 'blue',
                                label: 'Теор. K(t)',
                                pointRadius: 0,
                                pointHitRadius: 0
                            },
                            {
                                data: empirData1,
                                fill: false,
                                borderColor: 'green',
                                label: 'Эмпирическая K*(t)',
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
