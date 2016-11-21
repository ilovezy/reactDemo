import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TestAutoComplete from './TestAutoComplete'
import TestBadge from './TestBadge'
import TestBottomNav from './TestBottomNav'
import TestFlatButtons from './TestFlatButtons'

export default class TestMaterial extends React.Component {
    render(){
        return (
            <div>
                <MuiThemeProvider >
                    <AppBar title="to test material ui" />
                </MuiThemeProvider>
                <TestAutoComplete />
                <TestBadge />
                <TestFlatButtons />







                <TestBottomNav />
            </div>
        )
    }
}
