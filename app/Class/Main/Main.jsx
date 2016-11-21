import React from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';

// icons
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';

var Main = React.createClass({
    render(){
        return (
            <div>
                <AppBar title="To test react material"
                        iconClassNameRight="muidocs-icon-navigation-expand-more" />
                <h1 className="text-center">Main</h1>

                <List>
                  <Link className="list-group-item" to="/About">
                    <ListItem primaryText="About" leftIcon={<ContentInbox />} />
                  </Link>

                  <Link className="list-group-item" to="/Menu">
                    <ListItem primaryText="Menu" leftIcon={<ActionGrade />} />
                  </Link>

                  <Link className="list-group-item" to="/Todo">
                    <ListItem primaryText="Todo" leftIcon={<ContentSend />} />
                  </Link>

                  <Link className="list-group-item" to="/TestMaterial">
                    <ListItem primaryText="TestMaterial" leftIcon={<ContentDrafts />} />
                  </Link>
                </List>
            </div>
        )
    }
})

module.exports = Main