import React from 'react';
import AppBar from 'material-ui/AppBar';
import TestAutoComplete from './TestAutoComplete'
import TestBadge from './TestBadge'
import TestBottomNav from './TestBottomNav'
import TestFlatButtons from './TestFlatButtons'
import TestChip from './TestChip'
import TestDialog from './TestDialog'
import Divider from 'material-ui/Divider';
import Header from '../../components/Header'
export default class TestMaterial extends React.Component {
    render(){
        return (
            <div>
              <Header title="to test material ui" />
              <TestAutoComplete />
              <TestBadge />
              <TestFlatButtons />
              <TestChip />

              <h1>test dialog</h1>
              <TestDialog />



              <br/>
              <br/>
              <TestBottomNav />
            </div>
        )
    }
}
