import React, { Component } from 'react';

class Course extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id);
        console.log(this.props.location.search.split('=')[1])
    }
    
    render () {
        return (
            <div>
                <h1>{this.props.location.search.split('=')[1]}</h1>
                <p>You selected the Course with ID: _ID_</p>
            </div>
        );
    }
}

export default Course;