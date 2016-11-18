import React from 'react';
import {Router,Route,hashHistory, Link} from 'react-router';
var About = React.createClass({
    render(){
        return (
            <div className="container">
                <h1>About</h1>
                <p>wow!!! this is written by cchotaru </p>
            </div>
        )
    }
})

module.exports = About