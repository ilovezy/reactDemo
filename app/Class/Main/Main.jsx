import React from 'react';
import {Link} from 'react-router';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
// icons
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Header from '../../components/Header'
import { UPDATE_NEW_DATE } from '../../constants/Constants'
import NotificationListener from '../../actions/NotificationListener'


export default class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pickedDate: ''
    }
  }

  componentDidMount(){
    NotificationListener.bind(UPDATE_NEW_DATE, this.updateNewDate.bind(this));
  }

  componentWillUnmount(){
    console.log('main unmounted')
    NotificationListener.unbind(UPDATE_NEW_DATE);
  }

  updateNewDate(text){
    this.setState({pickedDate: text})
    console.log('!update New Date now 333')
  }
  render(){
    let me = this
    return (
      <div>
        <Header title={me.state.pickedDate} noBack />

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

          <Link to="/TestAntDesign">
            <ListItem primaryText="TestAntDesign" leftIcon={<ContentDrafts />} />
          </Link>

          <Link to="/DatePickerContainer">
            <ListItem primaryText="DatePickerContainer" leftIcon={<ContentDrafts />} />
          </Link>

          <Link to="/TestDraft">
            <ListItem primaryText="TestDraft" leftIcon={<ContentDrafts />} />
          </Link>
        </List>

        <Paper>
          {this.props.children}
        </Paper>
      </div>
    )
  }
}
