import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import HomePage from './pages/Home/home-page';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path ='/home' element = {<HomePage />} />
                </Routes>

            </div>
        </Router>
    );
};

export default App;