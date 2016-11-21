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
                <MuiThemeProvider>
                    <AppBar title="To test react material"
                            iconClassNameRight="muidocs-icon-navigation-expand-more" />
                </MuiThemeProvider>

                <MuiThemeProvider>
                    <h1 className="text-center">Main</h1>
                </MuiThemeProvider>

                <div className="list-group">
                    <Link className="list-group-item" to="/About">About</Link>
                    <Link className="list-group-item" to="/Menu">Menu</Link>
                    <Link className="list-group-item" to="/Todo">Todo</Link>
                    <Link className="list-group-item" to="/TestMaterial">Test Material</Link>
                </div>

                <MuiThemeProvider>
                    <List>
                        <ListItem primaryText="About" leftIcon={<ContentInbox />} />
                        <ListItem primaryText="Menu" leftIcon={<ActionGrade />} />
                        <ListItem primaryText="Todo" leftIcon={<ContentSend />} />
                        <ListItem primaryText="TestMaterial" leftIcon={<ContentDrafts />} />
                    </List>
                </MuiThemeProvider>
            </div>
        )
    }
})

module.exports = Main