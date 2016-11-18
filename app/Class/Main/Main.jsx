import React from 'react';
import {Link} from 'react-router';
var Main = React.createClass({
    render(){
        return (
            <div className="container">
                <h1 className="text-center">Main</h1>

                <div className="list-group">
                    <Link className="list-group-item" to="/About">About</Link>
                    <Link className="list-group-item" to="/Menu">Menu</Link>
                    <Link className="list-group-item" to="/Todo">Todo</Link>
                </div>
            </div>
        )
    }
})

module.exports = Main