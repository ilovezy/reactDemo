var React = require('react');
var ReactDOM = require('react-dom');
import {Router,Route,hashHistory} from 'react-router';
import Main from './Class/Main/Main';
import Menu from './Class/Menu/Menu';

var TempRouter = React.createClass({
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Main}/>
                <Route path="/Menu" component={Menu}/>
                <Route path="/About" component={About}/>
            </Router>
        )
    }
})

ReactDOM.render(<TempRouter />, document.getElementById('react'));