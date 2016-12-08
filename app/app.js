import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router,Route,hashHistory, Link} from 'react-router';
import Main from './Class/Main/Main';
import About from './Class/About/About';
import Menu from './Class/Menu/Menu';
import Todo from './Class/Todo/Todo';
import TestMaterial from './Class/TestMaterial/TestMaterial';
import TestAntDesign from './Class/TestAntDesign/TestAntDesign';
import Draft from './Class/Draft/TestDraft';
import Tween from './Class/Tween/Tween';
import DatePickerContainer from './Class/DatePicker/DatePickerContainer'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

var App = React.createClass({
    render(){
        return (
            <MuiThemeProvider >
                <Router history={hashHistory}>
                    <Route path="/" component={Main}>
                        <Route path="/DatePickerContainer" component={DatePickerContainer}/>
                    </Route>
                    <Route path="/About" component={About}/>
                    <Route path="/Menu" component={Menu}/>
                    <Route path="/Todo" component={Todo}/>
                    <Route path="/TestMaterial" component={TestMaterial}/>
                    <Route path="/TestAntDesign" component={TestAntDesign}/>
                    <Route path="/TestDraft" component={Draft}/>
                    <Route path="/Tween" component={Tween}/>
                </Router>
            </MuiThemeProvider>
        )
    }
})

ReactDOM.render(<App />, document.getElementById('react'));

