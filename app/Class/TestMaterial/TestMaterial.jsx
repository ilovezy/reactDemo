import React from 'react';
import TestAutoComplete from './TestAutoComplete'
import TestBadge from './TestBadge'
import TestBottomNav from './TestBottomNav'
import TestFlatButtons from './TestFlatButtons'
import TestChip from './TestChip'
import TestDialog from './TestDialog'
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
