import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Lab1 from './labs/lab1';
import Lab2 from './labs/lab2';
import Lab3 from './labs/lab3';
import Lab4 from './labs/lab4';
import Lab5 from './labs/lab5';
import Lab6 from './labs/lab6';
import Lab7 from './labs/lab7';
import Lab8 from './labs/lab8';

import Home from './Home';

/* Модель 1 вариант 3 */

const App = () => {
    return (
        <div>
            <Switch>
                <Route path="/:any">
                    <div>
                        <Link to="/">К списку работ</Link>
                    </div>
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/lab1">
                    <Lab1 />
                </Route>
                <Route path="/lab2">
                    <Lab2 />
                </Route>
                <Route path="/lab3">
                    <Lab3 />
                </Route>
                <Route path="/lab4">
                    <Lab4 />
                </Route>
                <Route path="/lab5">
                    <Lab5 />
                </Route>
                <Route path="/lab6">
                    <Lab6 />
                </Route>
                <Route path="/lab7">
                    <Lab7 />
                </Route>
                <Route path="/lab8">
                    <Lab8 />
                </Route>
            </Switch>
        </div>
    );
};

export default App;
