import React, { Component } from 'react';
import Academy from './Academy/Academy';
import { BrowserRouter } from "react-router-dom";
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <div className="App">
      <Academy></Academy>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
