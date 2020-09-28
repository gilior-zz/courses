import React from 'react';
import { BrowserRouter, Route, Redirect, Switch,NavLink} from 'react-router-dom';
import Users from "../containers/Users/Users";
import Courses from "../containers/Courses/Courses";
import Course from "../containers/Course/Course";
import Instructions from '../Instructions/Instructions';

function Academy(props) {
    return (
        <>
          <NavLink  to='/users'>Users</NavLink>
          <NavLink  to='/courses'>Courses</NavLink>
            <Switch>
                <Route path='/users' component={Users}></Route>
                <Route path='/courses' component={Courses}></Route>
                <Route  path='/instructions' component={Instructions}></Route>
                {/* <Route path='/course/:id' component={Course}></Route> */}
                <Redirect  from='/all-courses' to='./courses'></Redirect>
                <Redirect from='/' to='./instructions'></Redirect>
                <Route render={()=><h1>oops...</h1>}></Route>
               
            </Switch>
        </>

    );
}

export default Academy;