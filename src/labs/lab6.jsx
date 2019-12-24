import React, { useState } from 'react';
import { getNormalSample, towardUniform, lineOptions } from './lab5';
import { generateRandomValues } from './lab3';
import { Line } from 'react-chartjs-2';
const reverseF = x => Math.atan(x);
const D = 0.5;
const alpha = 2;
const h = 0.002;
const nsteps = 3 / alpha / h;

const S0 = h;
const Kf = Math.sqrt((2 * D) / alpha / S0);
const Tf = 1 / alpha;

const generateProcSample = n => {
    const whiteNoise = getNormalSample(n);

    const X1 = Array(n).fill(0);
    for (let i of [...Array(n - 1).keys()]) {
        X1[i + 1] = X1[i] + h * ((Kf / Tf) * whiteNoise[i] - (1 / Tf) * X1[i]);
    }

    const X2 = towardUniform(X1);
    const X3 = X2.map(item => reverseF(item));
    return X3;
};

const linspace = (startValue, stopValue, cardinality) => {
    var arr = [];
    var step = (stopValue - startValue) / (cardinality - 1);
    for (var i = 0; i < cardinality; i++) {
        arr.push(startValue + step * i);
    }
    return arr;
};

const ECDF = (sample, min, max, intervals) => {
    const ecdfArray = [];
    const sampleSize = sample.length;
    linspace(min, max, intervals).forEach(x => {
        const lessThenX = sample.filter(item => item < x).length;
        ecdfArray.push(lessThenX / sampleSize);
    });
    return ecdfArray;
};

const takeDelta = (arr1, arr2, size) => {
    let delta = 0;

    for (let i of [...Array(size).keys()]) {
        const abs = Math.abs(arr1[i] - arr2[i]);
        if (abs > delta) {
            delta = abs;
        }
    }
    return delta;
};

const Lab6 = () => {
    const [u, setU] = useState(true);
    const sampleSize = 40;
    const intervalsN = 40;

    const sampleT1 = [];
    const sampleT2 = [];

    for (let i of [...Array(sampleSize).keys()]) {
        const gsample = generateProcSample(10000);
        sampleT1.push(gsample[10000 - 4]);
        sampleT2.push(gsample[10000 - 1]);
    }

    const st1Size = sampleT1.length;
    const st2Size = sampleT2.length;

    const min = Math.min(...sampleT1, ...sampleT2);
    const max = Math.max(...sampleT1, ...sampleT2);

    const F1 = ECDF(sampleT1, min, max, intervalsN);
    const F2 = ECDF(sampleT2, min, max, intervalsN);

    const delta = takeDelta(F1, F2, intervalsN);

    const lbmd = delta * Math.sqrt((st1Size * st2Size) / (st1Size + st2Size));

    const xVals = linspace(min, max, intervalsN);
    const f1Data = F1.map((item, index) => ({
        x: xVals[index],
        y: item
    }));
    const f2Data = F2.map((item, index) => ({
        x: xVals[index],
        y: item
    }));

    /* Проверка эргодичности */

    const intervalsN2 = 100;

    const sampleT1_2 = [];

    for (let i of [...Array(sampleSize).keys()]) {
        const gsample = generateProcSample(10000);
        sampleT1_2.push(gsample[10000 - 3]);
    }
    const processSample = generateProcSample(100000);

    const sampleT1_2Size = sampleT1_2.length;
    const procSammpleSize = processSample.length;

    const min2 = Math.min(...sampleT1_2, ...processSample);
    const max2 = Math.max(...sampleT1_2, ...processSample);

    const ecdf1 = ECDF(sampleT1_2, min2, max2, intervalsN2);
    const ecdf2 = ECDF(processSample, min2, max2, intervalsN2);
    console.log(ecdf1, ecdf2);

    const delta2 = takeDelta(ecdf1, ecdf2, intervalsN2);

    const lmbd2 =
        delta2 *
        Math.sqrt(
            (sampleT1_2Size * procSammpleSize) /
                (sampleT1_2Size + procSammpleSize)
        );

    const x2Vals = linspace(min2, max2, intervalsN2);

    const ecdf1Data = ecdf1.map((item, index) => ({
        x: x2Vals[index],
        y: item
    }));

    const ecdf2Data = ecdf2.map((item, index) => ({
        x: x2Vals[index],
        y: item
    }));

    return (
        <div>
            <button onClick={() => setU(!u)}>Сгенерировать</button>
            <p>Проверка стационарности</p>Δ = {delta}, λ={lbmd}
            <div style={{ maxWidth: '700px' }}>
                <Line
                    options={lineOptions}
                    data={{
                        datasets: [
                            {
                                data: f1Data,
                                steppedLine: true,

                                fill: false,
                                borderColor: 'blue',
                                label: 'F*t1(x)',
                                pointRadius: 0,
                                pointHitRadius: 0
                            },
                            {
                                data: f2Data,
                                steppedLine: true,

                                fill: false,
                                borderColor: 'green',
                                label: 'F*t2(x)',
                                pointRadius: 0,
                                pointHitRadius: 0
                            }
                        ]
                    }}
                />
            </div>
              <p>Проверка эргодичности</p>Δ = {delta2}, λ={lmbd2}
            <div style={{ maxWidth: '700px' }}>
                <Line
                    options={lineOptions}
                    data={{
                        datasets: [
                            {
                                data: ecdf1Data,
                                steppedLine: true,

                                fill: false,
                                borderColor: 'blue',
                                label: 'F*t1(x)',
                                pointRadius: 0,
                                pointHitRadius: 0
                            },
                            {
                                data: ecdf2Data,
                                steppedLine: true,

                                fill: false,
                                borderColor: 'green',
                                label: 'F*(x)',
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

export default Lab6;
