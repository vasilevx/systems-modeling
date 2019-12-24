import React, { useState, useRef } from 'react';

const teorQ = 0.43;

const lambda = 15;
const mu = 20;
const targetError = 0.01;
const n = 3;
const m = 1;
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n != 1 ? n * factorial(n - 1) : 1;
}

const qTeor = () => {
    let leftBottomSum = 0;

    for (let index of [...Array(n + 1).keys()]) {
        leftBottomSum += (lambda / mu) ** index / factorial(index);
    }

    let rightBottomSum = 0;
    for (let index of [...Array(m + 1).keys()]) {
        if (index === 0) {
            continue;
        }

        rightBottomSum +=
            (lambda / mu) ** (n + index) / (factorial(n) * n ** index);
    }

    return (
        (lambda / mu) ** (n + m) /
        (factorial(n) * n ** m) /
        (leftBottomSum + rightBottomSum)
    );
};

const teorP = 1 - qTeor();

const delta = arg => {
    return -Math.log(1 - Math.random()) / arg;
};

const Lab8 = () => {
    const [u, setU] = useState(true);
    let r = 0;

    let t = 0;
    let tau = Array(n).fill(0);
    let N = 0;
    let M = 0;

    let ε_p = 0;
    let ε_error = 0;
    while (t < 100) {
        t += delta(lambda);
        N += 1;

        const temp = t;

        if (tau.filter(item => temp < item).length === n && r < m) {
            r += 1;
        }

        for (let i of [...Array(n).keys()]) {
            let temp = t;
            if (t > tau[i]) {
                if (r !== 0) {
                    r -= 1;
                }
                let k = 1;
                if (n !== 1) {
                    k = tau.filter(item => temp < item).length;
                }
                tau[i] = t + delta(mu * k);
                M += 1;
                break;
            }
        }

        ε_p = M / N;
        ε_error = 3 * Math.sqrt((ε_p * (1 - ε_p)) / N);
    }
    const firstAttempt = {
        err: ε_error,
        p: ε_p,
        t,
        N: N,
        M: M
    };

    while (ε_error > targetError) {
        let nRequired = Math.round((9 * ε_p * (1 - ε_p)) / targetError ** 2);

        for (let i of [...Array(nRequired).keys()]) {
            t += delta(lambda);
            N += 1;
            const temp = t;

            if (tau.filter(item => temp < item).length === n && r < m) {
                r += 1;
            }

            for (let i of [...Array(n).keys()]) {
                const temp = t;
                if (t > tau[i]) {
                    if (r !== 0) {
                        r -= 1;
                    }

                    let k = 1;

                    if (n !== 1) {
                        k = tau.filter(item => temp < item).length;
                    }

                    tau[i] = t + delta(mu * k);
                    M += 1;

                    break;
                }
            }
        }

        ε_p = M / N;
        ε_error = 3 * Math.sqrt((ε_p * (1 - ε_p)) / N);
    }

    const secondAttempt = {
        err: ε_error,
        p: ε_p,
        t,
        N: N,
        M: M
    };

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    setU(!u);
                }}
            >
                <button type="submit">Смоделировать</button>
            </form>
            <table>
                <tbody>
                    <tr>
                        <td>λ</td>
                        <td>{lambda}</td>
                    </tr>
                    <tr>
                        <td>μ</td>
                        <td>{mu}</td>
                    </tr>
                    <tr>
                        <td>p</td>
                        <td>{teorP}</td>
                    </tr>
                    <tr>
                        <td>m</td>
                        <td>{m}</td>
                    </tr>
                    <tr>
                        <td>n</td>
                        <td>{n}</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <td></td>
                        <td>За 100 с.</td>
                        <td>
                            Спустя{' '}
                            {(secondAttempt.t - firstAttempt.t).toFixed(0)} с.
                        </td>
                    </tr>
                    <tr>
                        <td>t</td>
                        <td>{firstAttempt.t.toFixed(0)}</td>
                        <td>{secondAttempt.t.toFixed(0)}</td>
                    </tr>
                    <tr>
                        <td>ε*</td>
                        <td>{firstAttempt.err}</td>
                        <td>{secondAttempt.err}</td>
                    </tr>

                    <tr>
                        <td>N</td>
                        <td>{firstAttempt.N}</td>
                        <td>{secondAttempt.N}</td>
                    </tr>
                    <tr>
                        <td>M</td>
                        <td>{firstAttempt.M}</td>
                        <td>{secondAttempt.M}</td>
                    </tr>
                    <tr>
                        <td>p*</td>
                        <td>{firstAttempt.p}</td>
                        <td>{secondAttempt.p}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Lab8;
