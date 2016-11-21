var React = require('react');
var ReactDOM = require('react-dom');
import {Router,Route,hashHistory, Link} from 'react-router';
import Main from './Class/Main/Main';
import About from './Class/About/About';
import Menu from './Class/Menu/Menu';
import Todo from './Class/Todo/Todo';
import TestMaterial from './Class/TestMaterial/TestMaterial';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var TempRouter = React.createClass({
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Main}/>
                <Route path="/About" component={About}/>
                <Route path="/Menu" component={Menu}/>
                <Route path="/Todo" component={Todo}/>
                <Route path="/TestMaterial" component={TestMaterial}/>
            </Router>
        )
    }
})

ReactDOM.render(<TempRouter />, document.getElementById('react'));

