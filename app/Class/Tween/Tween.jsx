import React from 'react';
import Header from '../../components/Header'
import QueueAnim from 'rc-queue-anim'
import {FlatButton} from 'material-ui'

export default class Tween extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      change: false
    }
  }

  render(){
    return (
      <div>
        <Header title="about"/>

        <QueueAnim delay={300} className="queue-simple">
          <div key="a">{this.state.change + ''}</div>
          <div key="b">{this.state.change + ''}</div>
          <div key="c">{this.state.change + ''}</div>
          <div key="d">{this.state.change + ''}</div>
        </QueueAnim>

        <FlatButton label="click" onClick={()=>{
          this.setState({change: !this.state.change})
        }}/>
      </div>
    )
  }
}