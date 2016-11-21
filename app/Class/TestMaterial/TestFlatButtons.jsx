import React from 'react'
import FlatButton from 'material-ui/FlatButton'

export default class FlatButtons extends React.Component {
    render() {
        return (
            <div>
                <FlatButton label="Default" />
                <FlatButton label="Default" primary />
                <FlatButton label="Default" secondary />
                <FlatButton label="Default" disabled />
            </div>
        )
    }
}