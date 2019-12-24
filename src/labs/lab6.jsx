import React, { useState } from 'react';
import { getNormalSample, towardUniform } from './lab5';
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
    return (
        <div>
            <button onClick={() => setU(!u)}></button>
        </div>
    );
};

export default Lab6;
