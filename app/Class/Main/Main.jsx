import React from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
// icons
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Header from '../../components/Header'


export default class Main extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    let me = this
    return (
      <div>
        <Header title="main" noBack />

        <List>
          <Link to="/About">
            <ListItem primaryText="About" leftIcon={<ContentInbox />} />
          </Link>

          <Link to="/Menu">
            <ListItem primaryText="Menu" leftIcon={<ActionGrade />} />
          </Link>

          <Link to="/Todo">
            <ListItem primaryText="Todo" leftIcon={<ContentSend />} />
          </Link>

          <Link to="/TestMaterial">
            <ListItem primaryText="TestMaterial" leftIcon={<ContentDrafts />} />
          </Link>

          <Link to="/DatePickerContainer">
            <ListItem primaryText="DatePickerContainer" leftIcon={<ContentDrafts />} />
          </Link>
        </List>
      </div>
    )
  }
}
