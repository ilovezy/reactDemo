import React from 'react';
import AppBar from 'material-ui/AppBar';
import TestAutoComplete from './TestAutoComplete'
import TestBadge from './TestBadge'
import TestBottomNav from './TestBottomNav'
import TestFlatButtons from './TestFlatButtons'

export default class TestMaterial extends React.Component {
    render(){
        return (
            <div>
                <AppBar title="to test material ui" />
                <TestAutoComplete />
                <TestBadge />
                <TestFlatButtons />
                <TestBottomNav />
            </div>
        )
    }
}
