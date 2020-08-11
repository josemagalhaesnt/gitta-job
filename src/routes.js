import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/main';
import JobDetails from './pages/jobDetails';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/job/details/" component={JobDetails} />
        </BrowserRouter>
    );
};

export default Routes;