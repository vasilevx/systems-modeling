import React, { useState, useRef } from 'react';

const teorQ = 0.43;
const teorP = 0.57;

const lambda = 15;
const mu = 20;
const targetError = 0.01;

const delta = arg => {
    return -Math.log(1 - Math.random()) / arg;
};

const Lab7 = () => {
    const [u, setU] = useState(true);

    let t = delta(lambda);
    let tau = t + delta(mu);
    let n_counter = 1;
    let m_counter = 1;

    while (t < 100) {
        t += delta(lambda);
        n_counter += 1;

        if (t > tau) {
            m_counter += 1;
            tau = t + delta(mu);
        }
    }

    let ε_p = m_counter / n_counter;
    let ε_error = 3 * Math.sqrt((ε_p * (1 - ε_p)) / n_counter);
    const firstAttempt = {
        err: ε_error,
        p: ε_p,
        t,
        N: n_counter,
        M: m_counter
    };

    while (ε_error > targetError) {
        let nRequired = Math.round((9 * ε_p * (1 - ε_p)) / targetError ** 2);
        for (let i of [...Array(nRequired).keys()]) {
            t += delta(lambda);
            n_counter += 1;

            if (t > tau) {
                m_counter += 1;

                tau = t + delta(mu);
            }
        }

        ε_p = m_counter / n_counter;
        ε_error = 3 * Math.sqrt((ε_p * (1 - ε_p)) / n_counter);
    }

    const secondAttempt = {
        err: ε_error,
        p: ε_p,
        t,
        N: n_counter,
        M: m_counter
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

export default Lab7;
