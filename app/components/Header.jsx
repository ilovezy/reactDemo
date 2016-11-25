import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class Header extends React.Component {
  render(){
    let me = this
    let iconElementLeft = this.props.noBack ? null : (<IconButton><NavigationClose /></IconButton>)
    return (
      <AppBar title={me.props.title}
              iconElementLeft={iconElementLeft}
              onLeftIconButtonTouchTap={ me.onClick.bind(me) }/>
    )
  }

  onClick(){
    window.history.back()
  }
}
