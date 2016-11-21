import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';

export default class TestDialog extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    render(){
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}/>,

            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}/>
        ]

        return (
            <div>
                <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />

                <Dialog
                    title="Dialog with actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <DatePicker hintText="Date Picker" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloremque impedit ipsa labore! Architecto dignissimos earum eveniet fugiat saepe suscipit?
                </Dialog>
            </div>
        )
    }
}