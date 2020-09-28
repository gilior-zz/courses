import React from 'react';
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom';
import Users from "../containers/Users/Users";
import Courses from "../containers/Courses/Courses";
import Instructions from '../Instructions/Instructions';

function Academy(props) {
    return (

        <Switch>


            <Route path='/users' component={Users}></Route>
            <Route path='/courses' component={Courses}></Route>
            <Route path='/instructions' component={Instructions}></Route>
            <Redirect from='/' to='./instructions'></Redirect>
        </Switch>

    );
}

export default Academy;