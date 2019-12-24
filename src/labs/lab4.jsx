import React, { useState } from 'react';
import '../App.css';
import { Line } from 'react-chartjs-2';
import { generateRandomValues } from './lab3';
/* Вариант 3 */

const D = 0.5;
const alpha = 2;
const h = 0.002;
const S0 = h / 12;
const Kf = Math.sqrt((2 * D) / alpha / S0);
const Tf = 1 / alpha;

const Lab4 = () => {
    const [n, setN] = useState(10000);
    const [u, setU] = useState(true);
    const whiteNoise = generateRandomValues(n).map(item => item - 0.5);
    let mean = 0;
    const X = new Array(n).fill(0);
    for (let i of [...Array(n - 1).keys()]) {
        X[i + 1] = X[i] + h * ((Kf / Tf) * whiteNoise[i] - (1 / Tf) * X[i]);
        mean += X[i + 1];
    }
    mean /= n;
    const nsteps = 3 / alpha / h;
    const corrTheoretical = new Array(nsteps)
        .fill(0)
        .map((_, i) => D * Math.exp(-alpha * i * h));
    const corrEmpirical = [];
    for (let j of [...Array(nsteps).keys()]) {
        let sum = 0;
        for (let i of [...Array(n - j).keys()]) {
            sum += (X[i] - mean) * (X[i + j] - mean);
        }
        sum /= n + 1 - j;
        corrEmpirical.push(sum);
    }
    const theorData = corrTheoretical.map((item, index) => ({
        x: index,
        y: item
    }));
    const empirData = corrEmpirical.map((item, index) => ({
        x: index,
        y: item
    }));

    return (
        <div>
            <label>
                <div>Размер выборки {n}</div>
                {/* <input
                    type="number"
                    defaultValue={n}
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                            const val = +e.target.value;
                            console.log(val, nsteps);
                            if (val < nsteps) {
                                e.target.value = 750;
                                return;
                            }
                            setU(!u);
                            setN(+e.target.value);
                        }
                    }}
                /> */}
                <button onClick={() => setU(!u)}>Сгенерировать</button>
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
                                data: theorData,
                                steppedLine: true,
                                fill: false,
                                borderColor: 'blue',
                                label: 'Теор. K(t)',
                                pointRadius: 0,
                                pointHitRadius: 0
                            },
                            {
                                data: empirData,
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
            </div>
        </div>
    );
};

export default Lab4;
