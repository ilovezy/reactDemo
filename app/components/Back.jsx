import React from 'react';
import FlatButton from 'material-ui/FlatButton';
export default class Back extends React.Component {
  render(){
    let me = this
    return (
      <div>
        <FlatButton onTouchTap={me.goBack.bind(me)}>
          go back
        </FlatButton>
      </div>
    )
  }

  goBack(){
    window.history.back()
  }
}
