import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton'

export default class FlatButtons extends React.Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <FlatButton label="Default" />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <FlatButton label="Default" primary />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <FlatButton label="Default" secondary />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <FlatButton label="Default" disabled />
                </MuiThemeProvider>

            </div>
        )
    }
}